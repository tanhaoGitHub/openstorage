package manager

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/libopenstorage/openstorage/api"
	clusterclient "github.com/libopenstorage/openstorage/api/client/cluster"
	"github.com/libopenstorage/openstorage/cluster"
	"github.com/portworx/kvdb"
	"github.com/sirupsen/logrus"
)

const (
	// ClusterPairKey is the key at which info about cluster pairs is stored in kvdb
	ClusterPairKey = "cluster/pair"
	// ClusterPairDefaultKey is the key at which the id for the default pair is stored
	clusterPairDefaultKey = "cluster/pair/default"
)

// CreatePair remote pairs this cluster with a remote cluster.
func (c *ClusterManager) CreatePair(
	request *api.ClusterPairCreateRequest,
) (*api.ClusterPairCreateResponse, error) {
	remoteIp := request.RemoteClusterIp

	// Pair with remote server
	logrus.Infof("Attempting to pair with cluster at IP %v", remoteIp)

	processRequest := &api.ClusterPairProcessRequest{
		SourceClusterId:    c.config.ClusterId,
		RemoteClusterToken: request.RemoteClusterToken,
	}

	clnt, err := clusterclient.NewClusterClient("http://"+remoteIp+":"+strconv.FormatUint(uint64(request.RemoteClusterPort), 10), cluster.APIVersion)
	if err != nil {
		return nil, err
	}
	remoteCluster := clusterclient.ClusterManager(clnt)

	// Issue a remote pair request
	resp, err := remoteCluster.ProcessPairRequest(processRequest)
	if err != nil {
		logrus.Warnf("Unable to pair with %v: %v", remoteIp, err)
		return nil, err
	}

	// Alert all listeners that we are pairing with a cluster.
	for e := c.listeners.Front(); e != nil; e = e.Next() {
		err = e.Value.(cluster.ClusterListener).CreatePair(
			&c.selfNode,
			resp,
		)
		if err != nil {
			logrus.Errorf("Unable to notify %v on a cluster pair event: %v",
				e.Value.(cluster.ClusterListener).String(),
				err,
			)
			return nil, err
		}
	}

	pairInfo := &api.ClusterPairInfo{
		Id:      resp.RemoteClusterId,
		Name:    resp.RemoteClusterName,
		Ip:      request.RemoteClusterIp,
		Port:    request.RemoteClusterPort,
		Token:   request.RemoteClusterToken,
		Options: resp.Options,
	}
	err = pairCreate(pairInfo, request.SetDefault)
	if err != nil {
		return nil, err
	}
	logrus.Infof("Successfully paired with cluster ID %v", resp.RemoteClusterId)

	response := &api.ClusterPairCreateResponse{
		RemoteClusterId:   pairInfo.Id,
		RemoteClusterName: pairInfo.Name,
	}
	return response, nil
}

// RemotePairPair handles a remote cluster's pair request
func (c *ClusterManager) ProcessPairRequest(
	request *api.ClusterPairProcessRequest,
) (*api.ClusterPairProcessResponse, error) {
	response := &api.ClusterPairProcessResponse{
		RemoteClusterId:   c.config.ClusterId,
		RemoteClusterName: c.config.ClusterId,
	}

	tokenResp, err := c.GetPairToken(false)
	if err != nil {
		return nil, fmt.Errorf("Error getting Cluster Token: %v", err)
	}
	if tokenResp.Token != request.RemoteClusterToken {
		return nil, fmt.Errorf("Token mismatch during pairing")
	}

	// Alert all listeners that we are pairing with a cluster.
	for e := c.listeners.Front(); e != nil; e = e.Next() {
		err := e.Value.(cluster.ClusterListener).ProcessPairRequest(
			&c.selfNode,
			response,
		)
		if err != nil {
			logrus.Errorf("Unable to notify %v on a a cluster remote pair request: %v",
				e.Value.(cluster.ClusterListener).String(),
				err,
			)

			return nil, err
		}
	}

	logrus.Infof("Successfully paired with remote cluster %v", request.SourceClusterId)

	return response, nil
}

func (c *ClusterManager) DeletePair(
	pairId string,
) error {
	if err := pairDelete(pairId); err != nil {
		return err
	}
	logrus.Infof("Successfully deleted pairing with cluster %v", pairId)
	return nil
}

func (c *ClusterManager) GetPair(
	pairId string,
) (*api.ClusterPairGetResponse, error) {
	var err error
	if pairId == "" {
		pairId, err = getDefaultPairId()
		if err != nil {
			return nil, err
		}
	}
	pair, err := pairGet(pairId)
	if err != nil {
		return nil, err
	}
	return &api.ClusterPairGetResponse{
		PairInfo: pair,
	}, nil
}

func (c *ClusterManager) EnumeratePairs() (*api.ClusterPairsEnumerateResponse, error) {
	response := &api.ClusterPairsEnumerateResponse{}
	pairs, err := pairList()
	if err != nil {
		return nil, err
	}
	response.Pairs = pairs
	response.DefaultId, err = getDefaultPairId()
	if err != nil {
		logrus.Warnf("Error getting default cluster pair: %v", err)
		return nil, err
	}
	return response, nil
}

func (c *ClusterManager) GetPairToken(
	reset bool,
) (*api.ClusterPairTokenGetResponse, error) {
	kvdb := kvdb.Instance()
	kvlock, err := kvdb.LockWithID(clusterLockKey, c.config.NodeId)
	if err != nil {
		logrus.Errorf("Unable to obtain cluster lock for getting cluster pair token: %v", err)
		return nil, err
	}
	defer kvdb.Unlock(kvlock)

	db, _, err := readClusterInfo()
	if err != nil {
		return nil, err
	}

	if db.PairToken == "" || reset {
		b := make([]byte, 64)
		rand.Read(b)
		db.PairToken = fmt.Sprintf("%x", b)

		_, err = writeClusterInfo(&db)
		if err != nil {
			return nil, err
		}
	}

	return &api.ClusterPairTokenGetResponse{
		Token: db.PairToken,
	}, nil
}

func pairList() (map[string]*api.ClusterPairInfo, error) {
	kvdb := kvdb.Instance()

	pairs := make(map[string]*api.ClusterPairInfo)
	kv, err := kvdb.Enumerate(ClusterPairKey)
	if err != nil {
		return nil, err
	}

	for _, v := range kv {
		if v.Key == clusterPairDefaultKey {
			continue
		}
		info := &api.ClusterPairInfo{}
		err = json.Unmarshal(v.Value, &info)
		if err != nil {
			return nil, err
		}
		pairs[info.Id] = info
	}

	return pairs, nil
}

func pairCreate(info *api.ClusterPairInfo, setDefault bool) error {
	kv := kvdb.Instance()
	kvp, err := kv.Lock(ClusterPairKey)
	if err != nil {
		return err
	}
	defer kv.Unlock(kvp)

	key := ClusterPairKey + "/" + info.Id
	_, err = kv.Create(key, info, 0)
	if err != nil {
		return err
	}

	defaultId, err := getDefaultPairId()
	if setDefault || err == kvdb.ErrNotFound || defaultId == "" {
		err = setDefaultPairId(info.Id)
		if err != nil {
			return err
		}
	}

	return nil
}

func getDefaultPairId() (string, error) {
	kv := kvdb.Instance()
	kvp, err := kv.Get(clusterPairDefaultKey)
	if err != nil {
		return "", err
	}
	return string(kvp.Value), nil
}

func setDefaultPairId(id string) error {
	kv := kvdb.Instance()
	_, err := kv.Put(clusterPairDefaultKey, id, 0)
	if err != nil {
		return err
	}
	return nil
}

func deleteDefaultPairId() error {
	kv := kvdb.Instance()
	_, err := kv.Delete(clusterPairDefaultKey)
	if err != nil {
		return err
	}
	return nil
}

func pairUpdate(info *api.ClusterPairInfo) error {
	kvdb := kvdb.Instance()
	kvp, err := kvdb.Lock(ClusterPairKey)
	if err != nil {
		return err
	}
	defer kvdb.Unlock(kvp)

	key := ClusterPairKey + "/" + info.Id
	_, err = kvdb.Update(key, info, 0)
	if err != nil {
		return err
	}

	return nil
}

func pairDelete(id string) error {
	kv := kvdb.Instance()
	kvp, err := kv.Lock(ClusterPairKey)
	if err != nil {
		return err
	}
	defer kv.Unlock(kvp)

	defaultId, err := getDefaultPairId()
	if err != kvdb.ErrNotFound && defaultId == id {
		err = deleteDefaultPairId()
		if err != nil {
			return fmt.Errorf("error deleting default pair id")
		}
	}

	key := ClusterPairKey + "/" + id
	_, err = kv.Delete(key)
	if err != nil {
		return err
	}
	return nil
}

func pairGet(id string) (*api.ClusterPairInfo, error) {
	kv := kvdb.Instance()
	kvp, err := kv.Lock(ClusterPairKey)
	if err != nil {
		return nil, err
	}
	defer kv.Unlock(kvp)

	key := ClusterPairKey + "/" + id
	kvp, err = kv.Get(key)
	if err != nil {
		return nil, err
	}
	info := &api.ClusterPairInfo{}
	err = json.Unmarshal(kvp.Value, &info)
	if err != nil {
		return nil, err
	}
	return info, nil
}

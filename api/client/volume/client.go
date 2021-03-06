package volume

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"strconv"

	"github.com/libopenstorage/openstorage/api"
	"github.com/libopenstorage/openstorage/api/client"
	"github.com/libopenstorage/openstorage/volume"
)

const (
	graphPath  = "/graph"
	volumePath = "/osd-volumes"
	snapPath   = "/osd-snapshot"
	credsPath  = "/osd-creds"
	backupPath = "/osd-backup"
)

type volumeClient struct {
	volume.IODriver
	c *client.Client
}

func newVolumeClient(c *client.Client) volume.VolumeDriver {
	return &volumeClient{volume.IONotSupported, c}
}

// String description of this driver.
func (v *volumeClient) Name() string {
	return "VolumeDriver"
}

func (v *volumeClient) Type() api.DriverType {
	// Block drivers implement the superset.
	return api.DriverType_DRIVER_TYPE_BLOCK
}

func (v *volumeClient) GraphDriverCreate(id string, parent string) error {
	response := ""
	if err := v.c.Put().Resource(graphPath + "/create").Instance(id).Do().Unmarshal(&response); err != nil {
		return err
	}
	if response != id {
		return fmt.Errorf("Invalid response: %s", response)
	}
	return nil
}

func (v *volumeClient) GraphDriverRemove(id string) error {
	response := ""
	if err := v.c.Put().Resource(graphPath + "/remove").Instance(id).Do().Unmarshal(&response); err != nil {
		return err
	}
	if response != id {
		return fmt.Errorf("Invalid response: %s", response)
	}
	return nil
}

func (v *volumeClient) GraphDriverGet(id string, mountLabel string) (string, error) {
	response := ""
	if err := v.c.Get().Resource(graphPath + "/inspect").Instance(id).Do().Unmarshal(&response); err != nil {
		return "", err
	}
	return response, nil
}

func (v *volumeClient) GraphDriverRelease(id string) error {
	response := ""
	if err := v.c.Put().Resource(graphPath + "/release").Instance(id).Do().Unmarshal(&response); err != nil {
		return err
	}
	if response != id {
		return fmt.Errorf("Invalid response: %v", response)
	}
	return nil
}

func (v *volumeClient) GraphDriverExists(id string) bool {
	response := false
	v.c.Get().Resource(graphPath + "/exists").Instance(id).Do().Unmarshal(&response)
	return response
}

func (v *volumeClient) GraphDriverDiff(id string, parent string) io.Writer {
	body, _ := v.c.Get().Resource(graphPath + "/diff?id=" + id + "&parent=" + parent).Do().Body()
	return bytes.NewBuffer(body)
}

func (v *volumeClient) GraphDriverChanges(id string, parent string) ([]api.GraphDriverChanges, error) {
	var changes []api.GraphDriverChanges
	err := v.c.Get().Resource(graphPath + "/changes").Instance(id).Do().Unmarshal(&changes)
	return changes, err
}

func (v *volumeClient) GraphDriverApplyDiff(id string, parent string, diff io.Reader) (int, error) {
	b, err := ioutil.ReadAll(diff)
	if err != nil {
		return 0, err
	}
	response := 0
	if err = v.c.Put().Resource(graphPath + "/diff?id=" + id + "&parent=" + parent).Instance(id).Body(b).Do().Unmarshal(&response); err != nil {
		return 0, err
	}
	return response, nil
}

func (v *volumeClient) GraphDriverDiffSize(id string, parent string) (int, error) {
	size := 0
	err := v.c.Get().Resource(graphPath + "/diffsize").Instance(id).Do().Unmarshal(&size)
	return size, err
}

// Create a new Vol for the specific volume spev.c.
// It returns a system generated VolumeID that uniquely identifies the volume
func (v *volumeClient) Create(locator *api.VolumeLocator, source *api.Source,
	spec *api.VolumeSpec) (string, error) {
	response := &api.VolumeCreateResponse{}
	request := &api.VolumeCreateRequest{
		Locator: locator,
		Source:  source,
		Spec:    spec,
	}
	if err := v.c.Post().Resource(volumePath).Body(request).Do().Unmarshal(response); err != nil {
		return "", err
	}
	if response.VolumeResponse != nil && response.VolumeResponse.Error != "" {
		return "", errors.New(response.VolumeResponse.Error)
	}
	return response.Id, nil
}

// Status diagnostic information
func (v *volumeClient) Status() [][2]string {
	return [][2]string{}
}

// Inspect specified volumes.
// Errors ErrEnoEnt may be returned.
func (v *volumeClient) Inspect(ids []string) ([]*api.Volume, error) {
	if len(ids) == 0 {
		return nil, nil
	}
	var volumes []*api.Volume
	request := v.c.Get().Resource(volumePath)
	for _, id := range ids {
		request.QueryOption(api.OptVolumeID, id)
	}
	if err := request.Do().Unmarshal(&volumes); err != nil {
		return nil, err
	}
	return volumes, nil
}

// Delete volume.
// Errors ErrEnoEnt, ErrVolHasSnaps may be returned.
func (v *volumeClient) Delete(volumeID string) error {
	response := &api.VolumeResponse{}
	if err := v.c.Delete().Resource(volumePath).Instance(volumeID).Do().Unmarshal(response); err != nil {
		return err
	}
	if response.Error != "" {
		return errors.New(response.Error)
	}
	return nil
}

// Snap specified volume. IO to the underlying volume should be quiesced before
// calling this function.
// Errors ErrEnoEnt may be returned
func (v *volumeClient) Snapshot(volumeID string, readonly bool,
	locator *api.VolumeLocator) (string, error) {
	response := &api.SnapCreateResponse{}
	request := &api.SnapCreateRequest{
		Id:       volumeID,
		Readonly: readonly,
		Locator:  locator,
	}
	if err := v.c.Post().Resource(snapPath).Body(request).Do().Unmarshal(response); err != nil {
		return "", err
	}
	// TODO(pedge): this probably should not be embedded in this way
	if response.VolumeCreateResponse != nil &&
		response.VolumeCreateResponse.VolumeResponse != nil &&
		response.VolumeCreateResponse.VolumeResponse.Error != "" {
		return "", errors.New(
			response.VolumeCreateResponse.VolumeResponse.Error)
	}
	if response.VolumeCreateResponse != nil {
		return response.VolumeCreateResponse.Id, nil
	}
	return "", nil
}

// Restore specified volume to given snapshot state
func (v *volumeClient) Restore(volumeID string, snapID string) error {
	response := &api.VolumeResponse{}
	req := v.c.Post().Resource(snapPath + "/restore").Instance(volumeID)
	req.QueryOption(api.OptSnapID, snapID)

	if err := req.Do().Unmarshal(response); err != nil {
		return err
	}
	if response.Error != "" {
		return errors.New(response.Error)
	}
	return nil
}

// Stats for specified volume.
// Errors ErrEnoEnt may be returned
func (v *volumeClient) Stats(
	volumeID string,
	cumulative bool,
) (*api.Stats, error) {
	stats := &api.Stats{}
	req := v.c.Get().Resource(volumePath + "/stats").Instance(volumeID)
	req.QueryOption(api.OptCumulative, strconv.FormatBool(cumulative))

	err := req.Do().Unmarshal(stats)
	return stats, err

}

// UsedSize returns allocated volume size.
// Errors ErrEnoEnt may be returned
func (v *volumeClient) UsedSize(
	volumeID string,
) (uint64, error) {
	var usedSize uint64
	req := v.c.Get().Resource(volumePath + "/usedsize").Instance(volumeID)
	err := req.Do().Unmarshal(&usedSize)
	return usedSize, err
}

// Active Requests on all volume.
func (v *volumeClient) GetActiveRequests() (*api.ActiveRequests, error) {

	requests := &api.ActiveRequests{}
	resp := v.c.Get().Resource(volumePath + "/requests").Instance("vol_id").Do()

	if resp.Error() != nil {
		return nil, resp.FormatError()
	}

	if err := resp.Unmarshal(requests); err != nil {
		return nil, err
	}

	return requests, nil
}

// Shutdown and cleanup.
func (v *volumeClient) Shutdown() {}

// Enumerate volumes that map to the volumeLocator. Locator fields may be regexp.
// If locator fields are left blank, this will return all volumes.
func (v *volumeClient) Enumerate(locator *api.VolumeLocator,
	labels map[string]string) ([]*api.Volume, error) {
	var volumes []*api.Volume
	req := v.c.Get().Resource(volumePath)
	if locator.Name != "" {
		req.QueryOption(api.OptName, locator.Name)
	}
	if len(locator.VolumeLabels) != 0 {
		req.QueryOptionLabel(api.OptLabel, locator.VolumeLabels)
	}
	if len(labels) != 0 {
		req.QueryOptionLabel(api.OptConfigLabel, labels)
	}
	resp := req.Do()
	if resp.Error() != nil {
		return nil, resp.FormatError()
	}
	if err := resp.Unmarshal(&volumes); err != nil {
		return nil, err
	}

	return volumes, nil
}

// Enumerate snaps for specified volume
// Count indicates the number of snaps populated.
func (v *volumeClient) SnapEnumerate(ids []string,
	snapLabels map[string]string) ([]*api.Volume, error) {
	var volumes []*api.Volume
	request := v.c.Get().Resource(snapPath)
	for _, id := range ids {
		request.QueryOption(api.OptVolumeID, id)
	}
	if len(snapLabels) != 0 {
		request.QueryOptionLabel(api.OptLabel, snapLabels)
	}
	if err := request.Do().Unmarshal(&volumes); err != nil {
		return nil, err
	}
	return volumes, nil
}

// Attach map device to the host.
// On success the devicePath specifies location where the device is exported
// Errors ErrEnoEnt, ErrVolAttached may be returned.
func (v *volumeClient) Attach(volumeID string, attachOptions map[string]string) (string, error) {
	response, err := v.doVolumeSetGetResponse(
		volumeID,
		&api.VolumeSetRequest{
			Action: &api.VolumeStateAction{
				Attach: api.VolumeActionParam_VOLUME_ACTION_PARAM_ON,
			},
			Options: attachOptions,
		},
	)
	if err != nil {
		return "", err
	}
	if response.Volume != nil {
		if response.Volume.Spec.Encrypted {
			return response.Volume.SecureDevicePath, nil
		} else {
			return response.Volume.DevicePath, nil
		}
	}
	return "", nil
}

// Detach device from the host.
// Errors ErrEnoEnt, ErrVolDetached may be returned.
func (v *volumeClient) Detach(volumeID string, options map[string]string) error {
	return v.doVolumeSet(
		volumeID,
		&api.VolumeSetRequest{
			Action: &api.VolumeStateAction{
				Attach: api.VolumeActionParam_VOLUME_ACTION_PARAM_OFF,
			},
			Options: options,
		},
	)
}

func (v *volumeClient) MountedAt(mountPath string) string {
	return ""
}

// Mount volume at specified path
// Errors ErrEnoEnt, ErrVolDetached may be returned.
func (v *volumeClient) Mount(volumeID string, mountPath string, options map[string]string) error {
	return v.doVolumeSet(
		volumeID,
		&api.VolumeSetRequest{
			Action: &api.VolumeStateAction{
				Mount:     api.VolumeActionParam_VOLUME_ACTION_PARAM_ON,
				MountPath: mountPath,
			},
			Options: options,
		},
	)
}

// Unmount volume at specified path
// Errors ErrEnoEnt, ErrVolDetached may be returned.
func (v *volumeClient) Unmount(volumeID string, mountPath string, options map[string]string) error {
	return v.doVolumeSet(
		volumeID,
		&api.VolumeSetRequest{
			Action: &api.VolumeStateAction{
				Mount:     api.VolumeActionParam_VOLUME_ACTION_PARAM_OFF,
				MountPath: mountPath,
			},
			Options: options,
		},
	)
}

// Update volume
func (v *volumeClient) Set(volumeID string, locator *api.VolumeLocator,
	spec *api.VolumeSpec) error {
	return v.doVolumeSet(
		volumeID,
		&api.VolumeSetRequest{
			Locator: locator,
			Spec:    spec,
		},
	)
}

func (v *volumeClient) doVolumeSet(volumeID string,
	request *api.VolumeSetRequest) error {
	_, err := v.doVolumeSetGetResponse(volumeID, request)
	return err
}

func (v *volumeClient) doVolumeSetGetResponse(volumeID string,
	request *api.VolumeSetRequest) (*api.VolumeSetResponse, error) {
	response := &api.VolumeSetResponse{}
	if err := v.c.Put().Resource(volumePath).Instance(volumeID).Body(request).Do().Unmarshal(response); err != nil {
		return nil, err
	}
	if response.VolumeResponse != nil && response.VolumeResponse.Error != "" {
		return nil, errors.New(response.VolumeResponse.Error)
	}
	return response, nil
}

// Quiesce quiesces volume i/o
func (v *volumeClient) Quiesce(
	volumeID string,
	timeoutSec uint64,
	quiesceID string,
) error {
	response := &api.VolumeResponse{}
	req := v.c.Post().Resource(volumePath + "/quiesce").Instance(volumeID)
	req.QueryOption(api.OptTimeoutSec, strconv.FormatUint(timeoutSec, 10))
	req.QueryOption(api.OptQuiesceID, quiesceID)
	if err := req.Do().Unmarshal(response); err != nil {
		return err
	}
	if response.Error != "" {
		return errors.New(response.Error)
	}
	return nil
}

// Unquiesce un-quiesces volume i/o
func (v *volumeClient) Unquiesce(volumeID string) error {
	response := &api.VolumeResponse{}
	req := v.c.Post().Resource(volumePath + "/unquiesce").Instance(volumeID)
	if err := req.Do().Unmarshal(response); err != nil {
		return err
	}
	if response.Error != "" {
		return errors.New(response.Error)
	}
	return nil
}

// CredsEnumerate enumerates configured credentials in the cluster
func (v *volumeClient) CredsEnumerate() (map[string]interface{}, error) {
	creds := make(map[string]interface{}, 0)
	err := v.c.Get().Resource(credsPath).Do().Unmarshal(&creds)
	return creds, err
}

// CredsCreate creates credentials for a given cloud provider
func (v *volumeClient) CredsCreate(params map[string]string) (string, error) {
	createResponse := api.CredCreateResponse{}
	request := &api.CredCreateRequest{
		InputParams: params,
	}
	req := v.c.Post().Resource(credsPath).Body(request)
	response := req.Do()
	if response.Error() != nil {
		return "", response.FormatError()
	}
	if err := response.Unmarshal(&createResponse); err != nil {
		return "", err
	}
	return createResponse.UUID, nil
}

// CredsDelete deletes the credential with given UUID
func (v *volumeClient) CredsDelete(uuid string) error {
	req := v.c.Delete().Resource(credsPath).Instance(uuid)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CredsValidate validates the credential by accessuing the cloud
// provider with the given credential
func (v *volumeClient) CredsValidate(uuid string) error {
	req := v.c.Put().Resource(credsPath + "/validate").Instance(uuid)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CloudBackupCreate uploads snapshot of a volume to cloud
func (v *volumeClient) CloudBackupCreate(
	input *api.CloudBackupCreateRequest,
) error {
	req := v.c.Post().Resource(backupPath).Body(input)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CloudBackupRestore downloads a cloud backup to a newly created volume
func (v *volumeClient) CloudBackupRestore(
	input *api.CloudBackupRestoreRequest,
) (*api.CloudBackupRestoreResponse, error) {
	restoreResponse := &api.CloudBackupRestoreResponse{}
	req := v.c.Post().Resource(backupPath + "/restore").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}

	if err := response.Unmarshal(&restoreResponse); err != nil {
		return nil, err
	}
	return restoreResponse, nil
}

// CloudBackupEnumerate lists the backups for a given cluster/credential/volumeID
func (v *volumeClient) CloudBackupEnumerate(
	input *api.CloudBackupEnumerateRequest,
) (*api.CloudBackupEnumerateResponse, error) {
	enumerateResponse := &api.CloudBackupEnumerateResponse{}
	req := v.c.Get().Resource(backupPath).Body(input)
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}

	if err := response.Unmarshal(&enumerateResponse); err != nil {
		return nil, err
	}
	return enumerateResponse, nil
}

// CloudBackupDelete deletes the backups in cloud
func (v *volumeClient) CloudBackupDelete(
	input *api.CloudBackupDeleteRequest,
) error {
	req := v.c.Delete().Resource(backupPath).Body(input)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CloudBackupDeleteAll deletes all the backups for a volume in cloud
func (v *volumeClient) CloudBackupDeleteAll(
	input *api.CloudBackupDeleteAllRequest,
) error {
	req := v.c.Delete().Resource(backupPath + "/all").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CloudBackupStatus gets the most recent status of backup/restores
func (v *volumeClient) CloudBackupStatus(
	input *api.CloudBackupStatusRequest,
) (*api.CloudBackupStatusResponse, error) {
	statusResponse := &api.CloudBackupStatusResponse{}
	req := v.c.Get().Resource(backupPath + "/status").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}

	if err := response.Unmarshal(&statusResponse); err != nil {
		return nil, err
	}
	return statusResponse, nil
}

// CloudBackupCatalog displays listing of backup content
func (v *volumeClient) CloudBackupCatalog(
	input *api.CloudBackupCatalogRequest,
) (*api.CloudBackupCatalogResponse, error) {
	catalogResponse := &api.CloudBackupCatalogResponse{}
	req := v.c.Get().Resource(backupPath + "/catalog").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}

	if err := response.Unmarshal(&catalogResponse); err != nil {
		return nil, err
	}
	return catalogResponse, nil
}

// CloudBackupHistory displays past backup/restore operations in the cluster
func (v *volumeClient) CloudBackupHistory(
	input *api.CloudBackupHistoryRequest,
) (*api.CloudBackupHistoryResponse, error) {
	historyResponse := &api.CloudBackupHistoryResponse{}
	req := v.c.Get().Resource(backupPath + "/history").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}

	if err := response.Unmarshal(&historyResponse); err != nil {
		return nil, err
	}
	return historyResponse, nil
}

// CloudBackupState allows a current backup
// state transisions(pause/resume/stop)
func (v *volumeClient) CloudBackupStateChange(
	input *api.CloudBackupStateChangeRequest,
) error {
	req := v.c.Put().Resource(backupPath + "/statechange").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CloudBackupSchedCreate for a volume creates a schedule to backup volume to cloud
func (v *volumeClient) CloudBackupSchedCreate(
	input *api.CloudBackupSchedCreateRequest,
) (*api.CloudBackupSchedCreateResponse, error) {
	createResponse := &api.CloudBackupSchedCreateResponse{}
	req := v.c.Post().Resource(backupPath + "/sched").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}

	if err := response.Unmarshal(&createResponse); err != nil {
		return nil, err
	}
	return createResponse, nil
}

// CloudBackupSchedDelete delete a volume's cloud backup-schedule
func (v *volumeClient) CloudBackupSchedDelete(
	input *api.CloudBackupSchedDeleteRequest,
) error {
	req := v.c.Delete().Resource(backupPath + "/sched").Body(input)
	response := req.Do()
	if response.Error() != nil {
		return response.FormatError()
	}
	return nil
}

// CloudBackupSchedEnumerate enumerates the configured backup-schedules in the cluster
func (v *volumeClient) CloudBackupSchedEnumerate() (*api.CloudBackupSchedEnumerateResponse, error) {
	enumerateResponse := &api.CloudBackupSchedEnumerateResponse{}
	req := v.c.Get().Resource(backupPath + "/sched")
	response := req.Do()
	if response.Error() != nil {
		return nil, response.FormatError()
	}
	if err := response.Unmarshal(enumerateResponse); err != nil {
		return nil, err
	}
	return enumerateResponse, nil
}

func (v *volumeClient) SnapshotGroup(groupID string, labels map[string]string) (*api.GroupSnapCreateResponse, error) {

	response := &api.GroupSnapCreateResponse{}
	request := &api.GroupSnapCreateRequest{
		Id:     groupID,
		Labels: labels,
	}

	req := v.c.Post().Resource(snapPath + "/snapshotgroup").Body(request)
	res := req.Do()
	if res.Error() != nil {
		return nil, res.FormatError()
	}

	if err := res.Unmarshal(&response); err != nil {
		return nil, err
	}
	return response, nil
}

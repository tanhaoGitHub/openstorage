#!/bin/sh
# Simple script to add generated files from api.proto into their own commit
git add api/api.pb.g* \
	api/client/sdk/. \
	api/server/sdk/api/api.swagger.json \
	pkg/flexvolume/flexvolume.pb.go \
	pkg/jsonpb/testing/testing.pb.go

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.exportSymbol('proto.openstorage.api.ActiveRequest', null, global);
goog.exportSymbol('proto.openstorage.api.ActiveRequests', null, global);
goog.exportSymbol('proto.openstorage.api.Alert', null, global);
goog.exportSymbol('proto.openstorage.api.AlertActionType', null, global);
goog.exportSymbol('proto.openstorage.api.Alerts', null, global);
goog.exportSymbol('proto.openstorage.api.AttachState', null, global);
goog.exportSymbol('proto.openstorage.api.AzureCredential', null, global);
goog.exportSymbol('proto.openstorage.api.ClusterNotify', null, global);
goog.exportSymbol('proto.openstorage.api.ClusterResponse', null, global);
goog.exportSymbol('proto.openstorage.api.CosType', null, global);
goog.exportSymbol('proto.openstorage.api.DriverType', null, global);
goog.exportSymbol('proto.openstorage.api.FSType', null, global);
goog.exportSymbol('proto.openstorage.api.GoogleCredential', null, global);
goog.exportSymbol('proto.openstorage.api.GraphDriverChangeType', null, global);
goog.exportSymbol('proto.openstorage.api.GraphDriverChanges', null, global);
goog.exportSymbol('proto.openstorage.api.Group', null, global);
goog.exportSymbol('proto.openstorage.api.GroupSnapCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.GroupSnapCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.IoProfile', null, global);
goog.exportSymbol('proto.openstorage.api.ObjectstoreInfo', null, global);
goog.exportSymbol('proto.openstorage.api.OperationFlags', null, global);
goog.exportSymbol('proto.openstorage.api.ReplicaSet', null, global);
goog.exportSymbol('proto.openstorage.api.ResourceType', null, global);
goog.exportSymbol('proto.openstorage.api.RuntimeStateMap', null, global);
goog.exportSymbol('proto.openstorage.api.S3Credential', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupCatalogRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupCatalogResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupDeleteAllRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupDeleteAllResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupDeleteRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupDeleteResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupEnumerateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupEnumerateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupHistoryItem', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupHistoryRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupHistoryResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupInfo', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupOpType', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupRequestedState', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupRestoreRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupRestoreResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupStateChangeRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupStateChangeResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupStatus', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupStatusRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupStatusResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCloudBackupStatusType', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterAlertClearRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterAlertClearResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterAlertEnumerateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterAlertEnumerateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterAlertEraseRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterAlertEraseResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterEnumerateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterEnumerateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterInspectRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkClusterInspectResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialCreateAWSRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialCreateAWSResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialCreateAzureRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialCreateAzureResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialCreateGoogleRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialCreateGoogleResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialDeleteRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialDeleteResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialEnumerateAWSRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialEnumerateAWSResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialEnumerateAzureRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialEnumerateAzureResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialEnumerateGoogleRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialEnumerateGoogleResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialValidateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkCredentialValidateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreDeleteRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreDeleteResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreInspectRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreInspectResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreUpdateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkObjectstoreUpdateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicy', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyDeleteRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyDeleteResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyEnumerateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyEnumerateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyInspectRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyInspectResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyUpdateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkSchedulePolicyUpdateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeAttachRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeAttachResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeDeleteRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeDeleteResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeDetachRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeDetachResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeEnumerateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeEnumerateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeInspectRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeInspectResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeMountRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeMountResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeSnapshotCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeSnapshotCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeSnapshotRestoreRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeSnapshotRestoreResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeUnmountRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SdkVolumeUnmountResponse', null, global);
goog.exportSymbol('proto.openstorage.api.SeverityType', null, global);
goog.exportSymbol('proto.openstorage.api.SnapCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.SnapCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.Source', null, global);
goog.exportSymbol('proto.openstorage.api.Stats', null, global);
goog.exportSymbol('proto.openstorage.api.Status', null, global);
goog.exportSymbol('proto.openstorage.api.StorageCluster', null, global);
goog.exportSymbol('proto.openstorage.api.StorageMedium', null, global);
goog.exportSymbol('proto.openstorage.api.StorageNode', null, global);
goog.exportSymbol('proto.openstorage.api.StoragePool', null, global);
goog.exportSymbol('proto.openstorage.api.StorageResource', null, global);
goog.exportSymbol('proto.openstorage.api.Volume', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeActionParam', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeConsumer', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeCreateRequest', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeCreateResponse', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeInfo', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeLocator', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeResponse', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeSetRequest', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeSetResponse', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeSpec', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeState', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeStateAction', null, global);
goog.exportSymbol('proto.openstorage.api.VolumeStatus', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.StorageResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.StorageResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.StorageResource.displayName = 'proto.openstorage.api.StorageResource';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.StorageResource.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.StorageResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.StorageResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StorageResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    medium: jspb.Message.getFieldWithDefault(msg, 3, 0),
    online: jspb.Message.getFieldWithDefault(msg, 4, false),
    iops: jspb.Message.getFieldWithDefault(msg, 5, 0),
    seqWrite: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    seqRead: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    randrw: +jspb.Message.getFieldWithDefault(msg, 8, 0.0),
    size: jspb.Message.getFieldWithDefault(msg, 9, 0),
    used: jspb.Message.getFieldWithDefault(msg, 10, 0),
    rotationSpeed: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lastScan: (f = msg.getLastScan()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metadata: jspb.Message.getFieldWithDefault(msg, 13, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.StorageResource}
 */
proto.openstorage.api.StorageResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.StorageResource;
  return proto.openstorage.api.StorageResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.StorageResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.StorageResource}
 */
proto.openstorage.api.StorageResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {!proto.openstorage.api.StorageMedium} */ (reader.readEnum());
      msg.setMedium(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnline(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIops(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeqWrite(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeqRead(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRandrw(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsed(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRotationSpeed(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastScan(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.StorageResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.StorageResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.StorageResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StorageResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMedium();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getOnline();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIops();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSeqWrite();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSeqRead();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getRandrw();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getUsed();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getRotationSpeed();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLastScan();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.StorageResource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageResource.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.openstorage.api.StorageResource.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageResource.prototype.setPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional StorageMedium medium = 3;
 * @return {!proto.openstorage.api.StorageMedium}
 */
proto.openstorage.api.StorageResource.prototype.getMedium = function() {
  return /** @type {!proto.openstorage.api.StorageMedium} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.openstorage.api.StorageMedium} value */
proto.openstorage.api.StorageResource.prototype.setMedium = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bool online = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.StorageResource.prototype.getOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.openstorage.api.StorageResource.prototype.setOnline = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 iops = 5;
 * @return {number}
 */
proto.openstorage.api.StorageResource.prototype.getIops = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageResource.prototype.setIops = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional double seq_write = 6;
 * @return {number}
 */
proto.openstorage.api.StorageResource.prototype.getSeqWrite = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.openstorage.api.StorageResource.prototype.setSeqWrite = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional double seq_read = 7;
 * @return {number}
 */
proto.openstorage.api.StorageResource.prototype.getSeqRead = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.openstorage.api.StorageResource.prototype.setSeqRead = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional double randRW = 8;
 * @return {number}
 */
proto.openstorage.api.StorageResource.prototype.getRandrw = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.openstorage.api.StorageResource.prototype.setRandrw = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint64 size = 9;
 * @return {number}
 */
proto.openstorage.api.StorageResource.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageResource.prototype.setSize = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional uint64 used = 10;
 * @return {number}
 */
proto.openstorage.api.StorageResource.prototype.getUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageResource.prototype.setUsed = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string rotation_speed = 11;
 * @return {string}
 */
proto.openstorage.api.StorageResource.prototype.getRotationSpeed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageResource.prototype.setRotationSpeed = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp last_scan = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.StorageResource.prototype.getLastScan = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.StorageResource.prototype.setLastScan = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.openstorage.api.StorageResource.prototype.clearLastScan = function() {
  this.setLastScan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.StorageResource.prototype.hasLastScan = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool metadata = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.StorageResource.prototype.getMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.openstorage.api.StorageResource.prototype.setMetadata = function(value) {
  jspb.Message.setField(this, 13, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.StoragePool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.StoragePool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.StoragePool.displayName = 'proto.openstorage.api.StoragePool';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.StoragePool.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.StoragePool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.StoragePool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StoragePool.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cos: jspb.Message.getFieldWithDefault(msg, 2, 0),
    medium: jspb.Message.getFieldWithDefault(msg, 3, 0),
    raidlevel: jspb.Message.getFieldWithDefault(msg, 4, ""),
    totalsize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    used: jspb.Message.getFieldWithDefault(msg, 8, 0),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.StoragePool}
 */
proto.openstorage.api.StoragePool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.StoragePool;
  return proto.openstorage.api.StoragePool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.StoragePool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.StoragePool}
 */
proto.openstorage.api.StoragePool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.openstorage.api.CosType} */ (reader.readEnum());
      msg.setCos(value);
      break;
    case 3:
      var value = /** @type {!proto.openstorage.api.StorageMedium} */ (reader.readEnum());
      msg.setMedium(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaidlevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalsize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsed(value);
      break;
    case 9:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.StoragePool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.StoragePool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.StoragePool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StoragePool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCos();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMedium();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRaidlevel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalsize();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getUsed();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.openstorage.api.StoragePool.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.openstorage.api.StoragePool.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional CosType Cos = 2;
 * @return {!proto.openstorage.api.CosType}
 */
proto.openstorage.api.StoragePool.prototype.getCos = function() {
  return /** @type {!proto.openstorage.api.CosType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.openstorage.api.CosType} value */
proto.openstorage.api.StoragePool.prototype.setCos = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional StorageMedium Medium = 3;
 * @return {!proto.openstorage.api.StorageMedium}
 */
proto.openstorage.api.StoragePool.prototype.getMedium = function() {
  return /** @type {!proto.openstorage.api.StorageMedium} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.openstorage.api.StorageMedium} value */
proto.openstorage.api.StoragePool.prototype.setMedium = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string RaidLevel = 4;
 * @return {string}
 */
proto.openstorage.api.StoragePool.prototype.getRaidlevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.StoragePool.prototype.setRaidlevel = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 TotalSize = 7;
 * @return {number}
 */
proto.openstorage.api.StoragePool.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.openstorage.api.StoragePool.prototype.setTotalsize = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint64 Used = 8;
 * @return {number}
 */
proto.openstorage.api.StoragePool.prototype.getUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.openstorage.api.StoragePool.prototype.setUsed = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * map<string, string> labels = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.StoragePool.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


proto.openstorage.api.StoragePool.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeLocator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeLocator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeLocator.displayName = 'proto.openstorage.api.VolumeLocator';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeLocator.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeLocator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeLocator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeLocator.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volumeLabelsMap: (f = msg.getVolumeLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.VolumeLocator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeLocator;
  return proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeLocator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = msg.getVolumeLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeLocator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeLocator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeLocator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeLocator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolumeLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.VolumeLocator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeLocator.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * map<string, string> volume_labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.VolumeLocator.prototype.getVolumeLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.openstorage.api.VolumeLocator.prototype.clearVolumeLabelsMap = function() {
  this.getVolumeLabelsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.Source.displayName = 'proto.openstorage.api.Source';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seed: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.Source}
 */
proto.openstorage.api.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.Source;
  return proto.openstorage.api.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.Source}
 */
proto.openstorage.api.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeed();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.openstorage.api.Source.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.Source.prototype.setParent = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string seed = 2;
 * @return {string}
 */
proto.openstorage.api.Source.prototype.getSeed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.Source.prototype.setSeed = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.Group.displayName = 'proto.openstorage.api.Group';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.Group}
 */
proto.openstorage.api.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.Group;
  return proto.openstorage.api.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.Group}
 */
proto.openstorage.api.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.Group.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.Group.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeSpec.displayName = 'proto.openstorage.api.VolumeSpec';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    ephemeral: jspb.Message.getFieldWithDefault(msg, 1, false),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    format: jspb.Message.getFieldWithDefault(msg, 3, 0),
    blockSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    haLevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cos: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ioProfile: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dedupe: jspb.Message.getFieldWithDefault(msg, 8, false),
    snapshotInterval: jspb.Message.getFieldWithDefault(msg, 9, 0),
    volumeLabelsMap: (f = msg.getVolumeLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    shared: jspb.Message.getFieldWithDefault(msg, 11, false),
    replicaSet: (f = msg.getReplicaSet()) && proto.openstorage.api.ReplicaSet.toObject(includeInstance, f),
    aggregationLevel: jspb.Message.getFieldWithDefault(msg, 13, 0),
    encrypted: jspb.Message.getFieldWithDefault(msg, 14, false),
    passphrase: jspb.Message.getFieldWithDefault(msg, 15, ""),
    snapshotSchedule: jspb.Message.getFieldWithDefault(msg, 16, ""),
    scale: jspb.Message.getFieldWithDefault(msg, 17, 0),
    sticky: jspb.Message.getFieldWithDefault(msg, 18, false),
    group: (f = msg.getGroup()) && proto.openstorage.api.Group.toObject(includeInstance, f),
    groupEnforced: jspb.Message.getFieldWithDefault(msg, 22, false),
    compressed: jspb.Message.getFieldWithDefault(msg, 23, false),
    cascaded: jspb.Message.getFieldWithDefault(msg, 24, false),
    journal: jspb.Message.getFieldWithDefault(msg, 25, false),
    sharedv4: jspb.Message.getFieldWithDefault(msg, 26, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.VolumeSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeSpec;
  return proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEphemeral(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {!proto.openstorage.api.FSType} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHaLevel(value);
      break;
    case 6:
      var value = /** @type {!proto.openstorage.api.CosType} */ (reader.readEnum());
      msg.setCos(value);
      break;
    case 7:
      var value = /** @type {!proto.openstorage.api.IoProfile} */ (reader.readEnum());
      msg.setIoProfile(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDedupe(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSnapshotInterval(value);
      break;
    case 10:
      var value = msg.getVolumeLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShared(value);
      break;
    case 12:
      var value = new proto.openstorage.api.ReplicaSet;
      reader.readMessage(value,proto.openstorage.api.ReplicaSet.deserializeBinaryFromReader);
      msg.setReplicaSet(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAggregationLevel(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEncrypted(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassphrase(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotSchedule(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScale(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSticky(value);
      break;
    case 21:
      var value = new proto.openstorage.api.Group;
      reader.readMessage(value,proto.openstorage.api.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGroupEnforced(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompressed(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCascaded(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJournal(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSharedv4(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEphemeral();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBlockSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getHaLevel();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCos();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getIoProfile();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDedupe();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSnapshotInterval();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getVolumeLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getShared();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getReplicaSet();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.openstorage.api.ReplicaSet.serializeBinaryToWriter
    );
  }
  f = message.getAggregationLevel();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getEncrypted();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getPassphrase();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getSnapshotSchedule();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getScale();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getSticky();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.openstorage.api.Group.serializeBinaryToWriter
    );
  }
  f = message.getGroupEnforced();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getCompressed();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getCascaded();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getJournal();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getSharedv4();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
};


/**
 * optional bool ephemeral = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getEphemeral = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setEphemeral = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 size = 2;
 * @return {number}
 */
proto.openstorage.api.VolumeSpec.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.openstorage.api.VolumeSpec.prototype.setSize = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional FSType format = 3;
 * @return {!proto.openstorage.api.FSType}
 */
proto.openstorage.api.VolumeSpec.prototype.getFormat = function() {
  return /** @type {!proto.openstorage.api.FSType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.openstorage.api.FSType} value */
proto.openstorage.api.VolumeSpec.prototype.setFormat = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 block_size = 4;
 * @return {number}
 */
proto.openstorage.api.VolumeSpec.prototype.getBlockSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.openstorage.api.VolumeSpec.prototype.setBlockSize = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 ha_level = 5;
 * @return {number}
 */
proto.openstorage.api.VolumeSpec.prototype.getHaLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.openstorage.api.VolumeSpec.prototype.setHaLevel = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional CosType cos = 6;
 * @return {!proto.openstorage.api.CosType}
 */
proto.openstorage.api.VolumeSpec.prototype.getCos = function() {
  return /** @type {!proto.openstorage.api.CosType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.openstorage.api.CosType} value */
proto.openstorage.api.VolumeSpec.prototype.setCos = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional IoProfile io_profile = 7;
 * @return {!proto.openstorage.api.IoProfile}
 */
proto.openstorage.api.VolumeSpec.prototype.getIoProfile = function() {
  return /** @type {!proto.openstorage.api.IoProfile} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.openstorage.api.IoProfile} value */
proto.openstorage.api.VolumeSpec.prototype.setIoProfile = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool dedupe = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getDedupe = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setDedupe = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint32 snapshot_interval = 9;
 * @return {number}
 */
proto.openstorage.api.VolumeSpec.prototype.getSnapshotInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.openstorage.api.VolumeSpec.prototype.setSnapshotInterval = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * map<string, string> volume_labels = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.VolumeSpec.prototype.getVolumeLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


proto.openstorage.api.VolumeSpec.prototype.clearVolumeLabelsMap = function() {
  this.getVolumeLabelsMap().clear();
};


/**
 * optional bool shared = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getShared = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setShared = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional ReplicaSet replica_set = 12;
 * @return {?proto.openstorage.api.ReplicaSet}
 */
proto.openstorage.api.VolumeSpec.prototype.getReplicaSet = function() {
  return /** @type{?proto.openstorage.api.ReplicaSet} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.ReplicaSet, 12));
};


/** @param {?proto.openstorage.api.ReplicaSet|undefined} value */
proto.openstorage.api.VolumeSpec.prototype.setReplicaSet = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.openstorage.api.VolumeSpec.prototype.clearReplicaSet = function() {
  this.setReplicaSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.hasReplicaSet = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 aggregation_level = 13;
 * @return {number}
 */
proto.openstorage.api.VolumeSpec.prototype.getAggregationLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.openstorage.api.VolumeSpec.prototype.setAggregationLevel = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional bool encrypted = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getEncrypted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setEncrypted = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * optional string passphrase = 15;
 * @return {string}
 */
proto.openstorage.api.VolumeSpec.prototype.getPassphrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeSpec.prototype.setPassphrase = function(value) {
  jspb.Message.setField(this, 15, value);
};


/**
 * optional string snapshot_schedule = 16;
 * @return {string}
 */
proto.openstorage.api.VolumeSpec.prototype.getSnapshotSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeSpec.prototype.setSnapshotSchedule = function(value) {
  jspb.Message.setField(this, 16, value);
};


/**
 * optional uint32 scale = 17;
 * @return {number}
 */
proto.openstorage.api.VolumeSpec.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.openstorage.api.VolumeSpec.prototype.setScale = function(value) {
  jspb.Message.setField(this, 17, value);
};


/**
 * optional bool sticky = 18;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getSticky = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 18, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setSticky = function(value) {
  jspb.Message.setField(this, 18, value);
};


/**
 * optional Group group = 21;
 * @return {?proto.openstorage.api.Group}
 */
proto.openstorage.api.VolumeSpec.prototype.getGroup = function() {
  return /** @type{?proto.openstorage.api.Group} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Group, 21));
};


/** @param {?proto.openstorage.api.Group|undefined} value */
proto.openstorage.api.VolumeSpec.prototype.setGroup = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.openstorage.api.VolumeSpec.prototype.clearGroup = function() {
  this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool group_enforced = 22;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getGroupEnforced = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 22, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setGroupEnforced = function(value) {
  jspb.Message.setField(this, 22, value);
};


/**
 * optional bool compressed = 23;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getCompressed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 23, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setCompressed = function(value) {
  jspb.Message.setField(this, 23, value);
};


/**
 * optional bool cascaded = 24;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getCascaded = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 24, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setCascaded = function(value) {
  jspb.Message.setField(this, 24, value);
};


/**
 * optional bool journal = 25;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getJournal = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 25, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setJournal = function(value) {
  jspb.Message.setField(this, 25, value);
};


/**
 * optional bool sharedv4 = 26;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.VolumeSpec.prototype.getSharedv4 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 26, false));
};


/** @param {boolean} value */
proto.openstorage.api.VolumeSpec.prototype.setSharedv4 = function(value) {
  jspb.Message.setField(this, 26, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.ReplicaSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.ReplicaSet.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.ReplicaSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.ReplicaSet.displayName = 'proto.openstorage.api.ReplicaSet';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.ReplicaSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.ReplicaSet.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.ReplicaSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.ReplicaSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ReplicaSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.ReplicaSet}
 */
proto.openstorage.api.ReplicaSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.ReplicaSet;
  return proto.openstorage.api.ReplicaSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.ReplicaSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.ReplicaSet}
 */
proto.openstorage.api.ReplicaSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.ReplicaSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.ReplicaSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.ReplicaSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ReplicaSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string nodes = 1;
 * @return {!Array.<string>}
 */
proto.openstorage.api.ReplicaSet.prototype.getNodesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<string>} value */
proto.openstorage.api.ReplicaSet.prototype.setNodesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.openstorage.api.ReplicaSet.prototype.addNodes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.openstorage.api.ReplicaSet.prototype.clearNodesList = function() {
  this.setNodesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.RuntimeStateMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.RuntimeStateMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.RuntimeStateMap.displayName = 'proto.openstorage.api.RuntimeStateMap';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.RuntimeStateMap.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.RuntimeStateMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.RuntimeStateMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.RuntimeStateMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtimeStateMap: (f = msg.getRuntimeStateMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.RuntimeStateMap}
 */
proto.openstorage.api.RuntimeStateMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.RuntimeStateMap;
  return proto.openstorage.api.RuntimeStateMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.RuntimeStateMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.RuntimeStateMap}
 */
proto.openstorage.api.RuntimeStateMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRuntimeStateMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.RuntimeStateMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.RuntimeStateMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.RuntimeStateMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.RuntimeStateMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntimeStateMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> runtime_state = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.RuntimeStateMap.prototype.getRuntimeStateMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


proto.openstorage.api.RuntimeStateMap.prototype.clearRuntimeStateMap = function() {
  this.getRuntimeStateMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.Volume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.Volume.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.Volume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.Volume.displayName = 'proto.openstorage.api.Volume';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.Volume.repeatedFields_ = [17,19,20,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.Volume.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.Volume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.Volume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Volume.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    source: (f = msg.getSource()) && proto.openstorage.api.Source.toObject(includeInstance, f),
    group: (f = msg.getGroup()) && proto.openstorage.api.Group.toObject(includeInstance, f),
    readonly: jspb.Message.getFieldWithDefault(msg, 4, false),
    locator: (f = msg.getLocator()) && proto.openstorage.api.VolumeLocator.toObject(includeInstance, f),
    ctime: (f = msg.getCtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.openstorage.api.VolumeSpec.toObject(includeInstance, f),
    usage: jspb.Message.getFieldWithDefault(msg, 8, 0),
    lastScan: (f = msg.getLastScan()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    format: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    state: jspb.Message.getFieldWithDefault(msg, 12, 0),
    attachedOn: jspb.Message.getFieldWithDefault(msg, 13, ""),
    attachedState: jspb.Message.getFieldWithDefault(msg, 14, 0),
    devicePath: jspb.Message.getFieldWithDefault(msg, 15, ""),
    secureDevicePath: jspb.Message.getFieldWithDefault(msg, 16, ""),
    attachPathList: jspb.Message.getRepeatedField(msg, 17),
    attachInfoMap: (f = msg.getAttachInfoMap()) ? f.toObject(includeInstance, undefined) : [],
    replicaSetsList: jspb.Message.toObjectList(msg.getReplicaSetsList(),
    proto.openstorage.api.ReplicaSet.toObject, includeInstance),
    runtimeStateList: jspb.Message.toObjectList(msg.getRuntimeStateList(),
    proto.openstorage.api.RuntimeStateMap.toObject, includeInstance),
    error: jspb.Message.getFieldWithDefault(msg, 21, ""),
    volumeConsumersList: jspb.Message.toObjectList(msg.getVolumeConsumersList(),
    proto.openstorage.api.VolumeConsumer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.Volume}
 */
proto.openstorage.api.Volume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.Volume;
  return proto.openstorage.api.Volume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.Volume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.Volume}
 */
proto.openstorage.api.Volume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.openstorage.api.Source;
      reader.readMessage(value,proto.openstorage.api.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 3:
      var value = new proto.openstorage.api.Group;
      reader.readMessage(value,proto.openstorage.api.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadonly(value);
      break;
    case 5:
      var value = new proto.openstorage.api.VolumeLocator;
      reader.readMessage(value,proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCtime(value);
      break;
    case 7:
      var value = new proto.openstorage.api.VolumeSpec;
      reader.readMessage(value,proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsage(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastScan(value);
      break;
    case 10:
      var value = /** @type {!proto.openstorage.api.FSType} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 11:
      var value = /** @type {!proto.openstorage.api.VolumeStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {!proto.openstorage.api.VolumeState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachedOn(value);
      break;
    case 14:
      var value = /** @type {!proto.openstorage.api.AttachState} */ (reader.readEnum());
      msg.setAttachedState(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicePath(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecureDevicePath(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachPath(value);
      break;
    case 18:
      var value = msg.getAttachInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 19:
      var value = new proto.openstorage.api.ReplicaSet;
      reader.readMessage(value,proto.openstorage.api.ReplicaSet.deserializeBinaryFromReader);
      msg.addReplicaSets(value);
      break;
    case 20:
      var value = new proto.openstorage.api.RuntimeStateMap;
      reader.readMessage(value,proto.openstorage.api.RuntimeStateMap.deserializeBinaryFromReader);
      msg.addRuntimeState(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 22:
      var value = new proto.openstorage.api.VolumeConsumer;
      reader.readMessage(value,proto.openstorage.api.VolumeConsumer.deserializeBinaryFromReader);
      msg.addVolumeConsumers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.Volume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.Volume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.Volume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Volume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.Source.serializeBinaryToWriter
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openstorage.api.Group.serializeBinaryToWriter
    );
  }
  f = message.getReadonly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.openstorage.api.VolumeLocator.serializeBinaryToWriter
    );
  }
  f = message.getCtime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.openstorage.api.VolumeSpec.serializeBinaryToWriter
    );
  }
  f = message.getUsage();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getLastScan();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getAttachedOn();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAttachedState();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getDevicePath();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getSecureDevicePath();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getAttachPathList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getAttachInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getReplicaSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.openstorage.api.ReplicaSet.serializeBinaryToWriter
    );
  }
  f = message.getRuntimeStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.openstorage.api.RuntimeStateMap.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getVolumeConsumersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.openstorage.api.VolumeConsumer.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.Volume.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.Volume.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Source source = 2;
 * @return {?proto.openstorage.api.Source}
 */
proto.openstorage.api.Volume.prototype.getSource = function() {
  return /** @type{?proto.openstorage.api.Source} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Source, 2));
};


/** @param {?proto.openstorage.api.Source|undefined} value */
proto.openstorage.api.Volume.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.Volume.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Volume.prototype.hasSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Group group = 3;
 * @return {?proto.openstorage.api.Group}
 */
proto.openstorage.api.Volume.prototype.getGroup = function() {
  return /** @type{?proto.openstorage.api.Group} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Group, 3));
};


/** @param {?proto.openstorage.api.Group|undefined} value */
proto.openstorage.api.Volume.prototype.setGroup = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.openstorage.api.Volume.prototype.clearGroup = function() {
  this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Volume.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool readonly = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.Volume.prototype.getReadonly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.openstorage.api.Volume.prototype.setReadonly = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional VolumeLocator locator = 5;
 * @return {?proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.Volume.prototype.getLocator = function() {
  return /** @type{?proto.openstorage.api.VolumeLocator} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeLocator, 5));
};


/** @param {?proto.openstorage.api.VolumeLocator|undefined} value */
proto.openstorage.api.Volume.prototype.setLocator = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.openstorage.api.Volume.prototype.clearLocator = function() {
  this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Volume.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp ctime = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.Volume.prototype.getCtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.Volume.prototype.setCtime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.openstorage.api.Volume.prototype.clearCtime = function() {
  this.setCtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Volume.prototype.hasCtime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional VolumeSpec spec = 7;
 * @return {?proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.Volume.prototype.getSpec = function() {
  return /** @type{?proto.openstorage.api.VolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeSpec, 7));
};


/** @param {?proto.openstorage.api.VolumeSpec|undefined} value */
proto.openstorage.api.Volume.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.openstorage.api.Volume.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Volume.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 usage = 8;
 * @return {number}
 */
proto.openstorage.api.Volume.prototype.getUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.openstorage.api.Volume.prototype.setUsage = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp last_scan = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.Volume.prototype.getLastScan = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.Volume.prototype.setLastScan = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.openstorage.api.Volume.prototype.clearLastScan = function() {
  this.setLastScan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Volume.prototype.hasLastScan = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional FSType format = 10;
 * @return {!proto.openstorage.api.FSType}
 */
proto.openstorage.api.Volume.prototype.getFormat = function() {
  return /** @type {!proto.openstorage.api.FSType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.openstorage.api.FSType} value */
proto.openstorage.api.Volume.prototype.setFormat = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional VolumeStatus status = 11;
 * @return {!proto.openstorage.api.VolumeStatus}
 */
proto.openstorage.api.Volume.prototype.getStatus = function() {
  return /** @type {!proto.openstorage.api.VolumeStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.openstorage.api.VolumeStatus} value */
proto.openstorage.api.Volume.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional VolumeState state = 12;
 * @return {!proto.openstorage.api.VolumeState}
 */
proto.openstorage.api.Volume.prototype.getState = function() {
  return /** @type {!proto.openstorage.api.VolumeState} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.openstorage.api.VolumeState} value */
proto.openstorage.api.Volume.prototype.setState = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional string attached_on = 13;
 * @return {string}
 */
proto.openstorage.api.Volume.prototype.getAttachedOn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.openstorage.api.Volume.prototype.setAttachedOn = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional AttachState attached_state = 14;
 * @return {!proto.openstorage.api.AttachState}
 */
proto.openstorage.api.Volume.prototype.getAttachedState = function() {
  return /** @type {!proto.openstorage.api.AttachState} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {!proto.openstorage.api.AttachState} value */
proto.openstorage.api.Volume.prototype.setAttachedState = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * optional string device_path = 15;
 * @return {string}
 */
proto.openstorage.api.Volume.prototype.getDevicePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.openstorage.api.Volume.prototype.setDevicePath = function(value) {
  jspb.Message.setField(this, 15, value);
};


/**
 * optional string secure_device_path = 16;
 * @return {string}
 */
proto.openstorage.api.Volume.prototype.getSecureDevicePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.openstorage.api.Volume.prototype.setSecureDevicePath = function(value) {
  jspb.Message.setField(this, 16, value);
};


/**
 * repeated string attach_path = 17;
 * @return {!Array.<string>}
 */
proto.openstorage.api.Volume.prototype.getAttachPathList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/** @param {!Array.<string>} value */
proto.openstorage.api.Volume.prototype.setAttachPathList = function(value) {
  jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.openstorage.api.Volume.prototype.addAttachPath = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


proto.openstorage.api.Volume.prototype.clearAttachPathList = function() {
  this.setAttachPathList([]);
};


/**
 * map<string, string> attach_info = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.Volume.prototype.getAttachInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


proto.openstorage.api.Volume.prototype.clearAttachInfoMap = function() {
  this.getAttachInfoMap().clear();
};


/**
 * repeated ReplicaSet replica_sets = 19;
 * @return {!Array.<!proto.openstorage.api.ReplicaSet>}
 */
proto.openstorage.api.Volume.prototype.getReplicaSetsList = function() {
  return /** @type{!Array.<!proto.openstorage.api.ReplicaSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.ReplicaSet, 19));
};


/** @param {!Array.<!proto.openstorage.api.ReplicaSet>} value */
proto.openstorage.api.Volume.prototype.setReplicaSetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.openstorage.api.ReplicaSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.ReplicaSet}
 */
proto.openstorage.api.Volume.prototype.addReplicaSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.openstorage.api.ReplicaSet, opt_index);
};


proto.openstorage.api.Volume.prototype.clearReplicaSetsList = function() {
  this.setReplicaSetsList([]);
};


/**
 * repeated RuntimeStateMap runtime_state = 20;
 * @return {!Array.<!proto.openstorage.api.RuntimeStateMap>}
 */
proto.openstorage.api.Volume.prototype.getRuntimeStateList = function() {
  return /** @type{!Array.<!proto.openstorage.api.RuntimeStateMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.RuntimeStateMap, 20));
};


/** @param {!Array.<!proto.openstorage.api.RuntimeStateMap>} value */
proto.openstorage.api.Volume.prototype.setRuntimeStateList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.openstorage.api.RuntimeStateMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.RuntimeStateMap}
 */
proto.openstorage.api.Volume.prototype.addRuntimeState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.openstorage.api.RuntimeStateMap, opt_index);
};


proto.openstorage.api.Volume.prototype.clearRuntimeStateList = function() {
  this.setRuntimeStateList([]);
};


/**
 * optional string error = 21;
 * @return {string}
 */
proto.openstorage.api.Volume.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.openstorage.api.Volume.prototype.setError = function(value) {
  jspb.Message.setField(this, 21, value);
};


/**
 * repeated VolumeConsumer volume_consumers = 22;
 * @return {!Array.<!proto.openstorage.api.VolumeConsumer>}
 */
proto.openstorage.api.Volume.prototype.getVolumeConsumersList = function() {
  return /** @type{!Array.<!proto.openstorage.api.VolumeConsumer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.VolumeConsumer, 22));
};


/** @param {!Array.<!proto.openstorage.api.VolumeConsumer>} value */
proto.openstorage.api.Volume.prototype.setVolumeConsumersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.openstorage.api.VolumeConsumer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.VolumeConsumer}
 */
proto.openstorage.api.Volume.prototype.addVolumeConsumers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.openstorage.api.VolumeConsumer, opt_index);
};


proto.openstorage.api.Volume.prototype.clearVolumeConsumersList = function() {
  this.setVolumeConsumersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.Stats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.Stats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.Stats.displayName = 'proto.openstorage.api.Stats';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.Stats.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.Stats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.Stats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Stats.toObject = function(includeInstance, msg) {
  var f, obj = {
    reads: jspb.Message.getFieldWithDefault(msg, 1, 0),
    readMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    readBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    writes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    writeMs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    writeBytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ioProgress: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ioMs: jspb.Message.getFieldWithDefault(msg, 8, 0),
    bytesUsed: jspb.Message.getFieldWithDefault(msg, 9, 0),
    intervalMs: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.Stats}
 */
proto.openstorage.api.Stats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.Stats;
  return proto.openstorage.api.Stats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.Stats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.Stats}
 */
proto.openstorage.api.Stats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReads(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReadMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReadBytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWrites(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWriteMs(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWriteBytes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIoProgress(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIoMs(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesUsed(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIntervalMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.Stats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.Stats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.Stats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Stats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReads();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReadMs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getReadBytes();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getWrites();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getWriteMs();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getWriteBytes();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getIoProgress();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getIoMs();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getBytesUsed();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getIntervalMs();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
};


/**
 * optional uint64 reads = 1;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getReads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setReads = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 read_ms = 2;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getReadMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setReadMs = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 read_bytes = 3;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getReadBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setReadBytes = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 writes = 4;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getWrites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setWrites = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 write_ms = 5;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getWriteMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setWriteMs = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 write_bytes = 6;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getWriteBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setWriteBytes = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint64 io_progress = 7;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getIoProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setIoProgress = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint64 io_ms = 8;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getIoMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setIoMs = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint64 bytes_used = 9;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getBytesUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setBytesUsed = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional uint64 interval_ms = 10;
 * @return {number}
 */
proto.openstorage.api.Stats.prototype.getIntervalMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.openstorage.api.Stats.prototype.setIntervalMs = function(value) {
  jspb.Message.setField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.Alert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.Alert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.Alert.displayName = 'proto.openstorage.api.Alert';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.Alert.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.Alert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.Alert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Alert.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    severity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    alertType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    resourceId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    resource: jspb.Message.getFieldWithDefault(msg, 7, 0),
    cleared: jspb.Message.getFieldWithDefault(msg, 8, false),
    ttl: jspb.Message.getFieldWithDefault(msg, 9, 0),
    uniqueTag: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.Alert}
 */
proto.openstorage.api.Alert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.Alert;
  return proto.openstorage.api.Alert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.Alert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.Alert}
 */
proto.openstorage.api.Alert.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.openstorage.api.SeverityType} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAlertType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 7:
      var value = /** @type {!proto.openstorage.api.ResourceType} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCleared(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTtl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.Alert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.Alert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.Alert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Alert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAlertType();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCleared();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getUniqueTag();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.openstorage.api.Alert.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.openstorage.api.Alert.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional SeverityType severity = 2;
 * @return {!proto.openstorage.api.SeverityType}
 */
proto.openstorage.api.Alert.prototype.getSeverity = function() {
  return /** @type {!proto.openstorage.api.SeverityType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.openstorage.api.SeverityType} value */
proto.openstorage.api.Alert.prototype.setSeverity = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 alert_type = 3;
 * @return {number}
 */
proto.openstorage.api.Alert.prototype.getAlertType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.openstorage.api.Alert.prototype.setAlertType = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.openstorage.api.Alert.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.Alert.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.Alert.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.Alert.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.openstorage.api.Alert.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.Alert.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string resource_id = 6;
 * @return {string}
 */
proto.openstorage.api.Alert.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.openstorage.api.Alert.prototype.setResourceId = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional ResourceType resource = 7;
 * @return {!proto.openstorage.api.ResourceType}
 */
proto.openstorage.api.Alert.prototype.getResource = function() {
  return /** @type {!proto.openstorage.api.ResourceType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.openstorage.api.ResourceType} value */
proto.openstorage.api.Alert.prototype.setResource = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool cleared = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.Alert.prototype.getCleared = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.openstorage.api.Alert.prototype.setCleared = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint64 ttl = 9;
 * @return {number}
 */
proto.openstorage.api.Alert.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.openstorage.api.Alert.prototype.setTtl = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional string unique_tag = 10;
 * @return {string}
 */
proto.openstorage.api.Alert.prototype.getUniqueTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.openstorage.api.Alert.prototype.setUniqueTag = function(value) {
  jspb.Message.setField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.Alerts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.Alerts.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.Alerts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.Alerts.displayName = 'proto.openstorage.api.Alerts';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.Alerts.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.Alerts.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.Alerts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.Alerts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Alerts.toObject = function(includeInstance, msg) {
  var f, obj = {
    alertList: jspb.Message.toObjectList(msg.getAlertList(),
    proto.openstorage.api.Alert.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.Alerts}
 */
proto.openstorage.api.Alerts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.Alerts;
  return proto.openstorage.api.Alerts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.Alerts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.Alerts}
 */
proto.openstorage.api.Alerts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.Alert;
      reader.readMessage(value,proto.openstorage.api.Alert.deserializeBinaryFromReader);
      msg.addAlert(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.Alerts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.Alerts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.Alerts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.Alerts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlertList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.Alert.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Alert alert = 1;
 * @return {!Array.<!proto.openstorage.api.Alert>}
 */
proto.openstorage.api.Alerts.prototype.getAlertList = function() {
  return /** @type{!Array.<!proto.openstorage.api.Alert>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.Alert, 1));
};


/** @param {!Array.<!proto.openstorage.api.Alert>} value */
proto.openstorage.api.Alerts.prototype.setAlertList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.Alert=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.Alert}
 */
proto.openstorage.api.Alerts.prototype.addAlert = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.Alert, opt_index);
};


proto.openstorage.api.Alerts.prototype.clearAlertList = function() {
  this.setAlertList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.ObjectstoreInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.ObjectstoreInfo.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.ObjectstoreInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.ObjectstoreInfo.displayName = 'proto.openstorage.api.ObjectstoreInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.ObjectstoreInfo.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.ObjectstoreInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.ObjectstoreInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ObjectstoreInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volumeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enabled: jspb.Message.getFieldWithDefault(msg, 3, false),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, 0),
    accessKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    secretKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
    endpointsList: jspb.Message.getRepeatedField(msg, 8),
    currentEndpoint: jspb.Message.getFieldWithDefault(msg, 9, ""),
    accessPort: jspb.Message.getFieldWithDefault(msg, 10, 0),
    region: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.ObjectstoreInfo}
 */
proto.openstorage.api.ObjectstoreInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.ObjectstoreInfo;
  return proto.openstorage.api.ObjectstoreInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.ObjectstoreInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.ObjectstoreInfo}
 */
proto.openstorage.api.ObjectstoreInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAction(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretKey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndpoints(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentEndpoint(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccessPort(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.ObjectstoreInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.ObjectstoreInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ObjectstoreInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAccessKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSecretKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getCurrentEndpoint();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAccessPort();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setUuid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string volume_id = 2;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool enabled = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setEnabled = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 action = 5;
 * @return {number}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setAction = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string access_key = 6;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setAccessKey = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string secret_key = 7;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getSecretKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setSecretKey = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * repeated string endpoints = 8;
 * @return {!Array.<string>}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getEndpointsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array.<string>} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setEndpointsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.openstorage.api.ObjectstoreInfo.prototype.addEndpoints = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.openstorage.api.ObjectstoreInfo.prototype.clearEndpointsList = function() {
  this.setEndpointsList([]);
};


/**
 * optional string current_endPoint = 9;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getCurrentEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setCurrentEndpoint = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int64 access_port = 10;
 * @return {number}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getAccessPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setAccessPort = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string region = 11;
 * @return {string}
 */
proto.openstorage.api.ObjectstoreInfo.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.openstorage.api.ObjectstoreInfo.prototype.setRegion = function(value) {
  jspb.Message.setField(this, 11, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeCreateRequest.displayName = 'proto.openstorage.api.VolumeCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && proto.openstorage.api.VolumeLocator.toObject(includeInstance, f),
    source: (f = msg.getSource()) && proto.openstorage.api.Source.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.openstorage.api.VolumeSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeCreateRequest}
 */
proto.openstorage.api.VolumeCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeCreateRequest;
  return proto.openstorage.api.VolumeCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeCreateRequest}
 */
proto.openstorage.api.VolumeCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.VolumeLocator;
      reader.readMessage(value,proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    case 2:
      var value = new proto.openstorage.api.Source;
      reader.readMessage(value,proto.openstorage.api.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 3:
      var value = new proto.openstorage.api.VolumeSpec;
      reader.readMessage(value,proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.VolumeLocator.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.Source.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openstorage.api.VolumeSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional VolumeLocator locator = 1;
 * @return {?proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.getLocator = function() {
  return /** @type{?proto.openstorage.api.VolumeLocator} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeLocator, 1));
};


/** @param {?proto.openstorage.api.VolumeLocator|undefined} value */
proto.openstorage.api.VolumeCreateRequest.prototype.setLocator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.VolumeCreateRequest.prototype.clearLocator = function() {
  this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Source source = 2;
 * @return {?proto.openstorage.api.Source}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.getSource = function() {
  return /** @type{?proto.openstorage.api.Source} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Source, 2));
};


/** @param {?proto.openstorage.api.Source|undefined} value */
proto.openstorage.api.VolumeCreateRequest.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.VolumeCreateRequest.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VolumeSpec spec = 3;
 * @return {?proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.getSpec = function() {
  return /** @type{?proto.openstorage.api.VolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeSpec, 3));
};


/** @param {?proto.openstorage.api.VolumeSpec|undefined} value */
proto.openstorage.api.VolumeCreateRequest.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.openstorage.api.VolumeCreateRequest.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeCreateRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeResponse.displayName = 'proto.openstorage.api.VolumeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeResponse}
 */
proto.openstorage.api.VolumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeResponse;
  return proto.openstorage.api.VolumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeResponse}
 */
proto.openstorage.api.VolumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.openstorage.api.VolumeResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeCreateResponse.displayName = 'proto.openstorage.api.VolumeCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volumeResponse: (f = msg.getVolumeResponse()) && proto.openstorage.api.VolumeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeCreateResponse}
 */
proto.openstorage.api.VolumeCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeCreateResponse;
  return proto.openstorage.api.VolumeCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeCreateResponse}
 */
proto.openstorage.api.VolumeCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.openstorage.api.VolumeResponse;
      reader.readMessage(value,proto.openstorage.api.VolumeResponse.deserializeBinaryFromReader);
      msg.setVolumeResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolumeResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.VolumeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.VolumeCreateResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeCreateResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional VolumeResponse volume_response = 2;
 * @return {?proto.openstorage.api.VolumeResponse}
 */
proto.openstorage.api.VolumeCreateResponse.prototype.getVolumeResponse = function() {
  return /** @type{?proto.openstorage.api.VolumeResponse} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeResponse, 2));
};


/** @param {?proto.openstorage.api.VolumeResponse|undefined} value */
proto.openstorage.api.VolumeCreateResponse.prototype.setVolumeResponse = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.VolumeCreateResponse.prototype.clearVolumeResponse = function() {
  this.setVolumeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeCreateResponse.prototype.hasVolumeResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeStateAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeStateAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeStateAction.displayName = 'proto.openstorage.api.VolumeStateAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeStateAction.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeStateAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeStateAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeStateAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    attach: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mountPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    devicePath: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeStateAction}
 */
proto.openstorage.api.VolumeStateAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeStateAction;
  return proto.openstorage.api.VolumeStateAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeStateAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeStateAction}
 */
proto.openstorage.api.VolumeStateAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.openstorage.api.VolumeActionParam} */ (reader.readEnum());
      msg.setAttach(value);
      break;
    case 2:
      var value = /** @type {!proto.openstorage.api.VolumeActionParam} */ (reader.readEnum());
      msg.setMount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMountPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicePath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeStateAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeStateAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeStateAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeStateAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttach();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMount();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMountPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDevicePath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional VolumeActionParam attach = 1;
 * @return {!proto.openstorage.api.VolumeActionParam}
 */
proto.openstorage.api.VolumeStateAction.prototype.getAttach = function() {
  return /** @type {!proto.openstorage.api.VolumeActionParam} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.openstorage.api.VolumeActionParam} value */
proto.openstorage.api.VolumeStateAction.prototype.setAttach = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional VolumeActionParam mount = 2;
 * @return {!proto.openstorage.api.VolumeActionParam}
 */
proto.openstorage.api.VolumeStateAction.prototype.getMount = function() {
  return /** @type {!proto.openstorage.api.VolumeActionParam} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.openstorage.api.VolumeActionParam} value */
proto.openstorage.api.VolumeStateAction.prototype.setMount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string mount_path = 3;
 * @return {string}
 */
proto.openstorage.api.VolumeStateAction.prototype.getMountPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeStateAction.prototype.setMountPath = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string device_path = 4;
 * @return {string}
 */
proto.openstorage.api.VolumeStateAction.prototype.getDevicePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeStateAction.prototype.setDevicePath = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeSetRequest.displayName = 'proto.openstorage.api.VolumeSetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && proto.openstorage.api.VolumeLocator.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.openstorage.api.VolumeSpec.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.openstorage.api.VolumeStateAction.toObject(includeInstance, f),
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeSetRequest}
 */
proto.openstorage.api.VolumeSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeSetRequest;
  return proto.openstorage.api.VolumeSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeSetRequest}
 */
proto.openstorage.api.VolumeSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.VolumeLocator;
      reader.readMessage(value,proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    case 2:
      var value = new proto.openstorage.api.VolumeSpec;
      reader.readMessage(value,proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.openstorage.api.VolumeStateAction;
      reader.readMessage(value,proto.openstorage.api.VolumeStateAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 4:
      var value = msg.getOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.VolumeLocator.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.VolumeSpec.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openstorage.api.VolumeStateAction.serializeBinaryToWriter
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional VolumeLocator locator = 1;
 * @return {?proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.VolumeSetRequest.prototype.getLocator = function() {
  return /** @type{?proto.openstorage.api.VolumeLocator} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeLocator, 1));
};


/** @param {?proto.openstorage.api.VolumeLocator|undefined} value */
proto.openstorage.api.VolumeSetRequest.prototype.setLocator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.VolumeSetRequest.prototype.clearLocator = function() {
  this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSetRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VolumeSpec spec = 2;
 * @return {?proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.VolumeSetRequest.prototype.getSpec = function() {
  return /** @type{?proto.openstorage.api.VolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeSpec, 2));
};


/** @param {?proto.openstorage.api.VolumeSpec|undefined} value */
proto.openstorage.api.VolumeSetRequest.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.VolumeSetRequest.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSetRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VolumeStateAction action = 3;
 * @return {?proto.openstorage.api.VolumeStateAction}
 */
proto.openstorage.api.VolumeSetRequest.prototype.getAction = function() {
  return /** @type{?proto.openstorage.api.VolumeStateAction} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeStateAction, 3));
};


/** @param {?proto.openstorage.api.VolumeStateAction|undefined} value */
proto.openstorage.api.VolumeSetRequest.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.openstorage.api.VolumeSetRequest.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSetRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> options = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.VolumeSetRequest.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.openstorage.api.VolumeSetRequest.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeSetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeSetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeSetResponse.displayName = 'proto.openstorage.api.VolumeSetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeSetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeSetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeSetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeSetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volume: (f = msg.getVolume()) && proto.openstorage.api.Volume.toObject(includeInstance, f),
    volumeResponse: (f = msg.getVolumeResponse()) && proto.openstorage.api.VolumeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeSetResponse}
 */
proto.openstorage.api.VolumeSetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeSetResponse;
  return proto.openstorage.api.VolumeSetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeSetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeSetResponse}
 */
proto.openstorage.api.VolumeSetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.Volume;
      reader.readMessage(value,proto.openstorage.api.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
      break;
    case 2:
      var value = new proto.openstorage.api.VolumeResponse;
      reader.readMessage(value,proto.openstorage.api.VolumeResponse.deserializeBinaryFromReader);
      msg.setVolumeResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeSetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeSetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeSetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeSetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.Volume.serializeBinaryToWriter
    );
  }
  f = message.getVolumeResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.VolumeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional Volume volume = 1;
 * @return {?proto.openstorage.api.Volume}
 */
proto.openstorage.api.VolumeSetResponse.prototype.getVolume = function() {
  return /** @type{?proto.openstorage.api.Volume} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Volume, 1));
};


/** @param {?proto.openstorage.api.Volume|undefined} value */
proto.openstorage.api.VolumeSetResponse.prototype.setVolume = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.VolumeSetResponse.prototype.clearVolume = function() {
  this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSetResponse.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VolumeResponse volume_response = 2;
 * @return {?proto.openstorage.api.VolumeResponse}
 */
proto.openstorage.api.VolumeSetResponse.prototype.getVolumeResponse = function() {
  return /** @type{?proto.openstorage.api.VolumeResponse} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeResponse, 2));
};


/** @param {?proto.openstorage.api.VolumeResponse|undefined} value */
proto.openstorage.api.VolumeSetResponse.prototype.setVolumeResponse = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.VolumeSetResponse.prototype.clearVolumeResponse = function() {
  this.setVolumeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeSetResponse.prototype.hasVolumeResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SnapCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SnapCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SnapCreateRequest.displayName = 'proto.openstorage.api.SnapCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SnapCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SnapCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SnapCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SnapCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locator: (f = msg.getLocator()) && proto.openstorage.api.VolumeLocator.toObject(includeInstance, f),
    readonly: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SnapCreateRequest}
 */
proto.openstorage.api.SnapCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SnapCreateRequest;
  return proto.openstorage.api.SnapCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SnapCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SnapCreateRequest}
 */
proto.openstorage.api.SnapCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.openstorage.api.VolumeLocator;
      reader.readMessage(value,proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadonly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SnapCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SnapCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SnapCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SnapCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.VolumeLocator.serializeBinaryToWriter
    );
  }
  f = message.getReadonly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.SnapCreateRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SnapCreateRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional VolumeLocator locator = 2;
 * @return {?proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.SnapCreateRequest.prototype.getLocator = function() {
  return /** @type{?proto.openstorage.api.VolumeLocator} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeLocator, 2));
};


/** @param {?proto.openstorage.api.VolumeLocator|undefined} value */
proto.openstorage.api.SnapCreateRequest.prototype.setLocator = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.SnapCreateRequest.prototype.clearLocator = function() {
  this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SnapCreateRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool readonly = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.SnapCreateRequest.prototype.getReadonly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.openstorage.api.SnapCreateRequest.prototype.setReadonly = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SnapCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SnapCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SnapCreateResponse.displayName = 'proto.openstorage.api.SnapCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SnapCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SnapCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SnapCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SnapCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeCreateResponse: (f = msg.getVolumeCreateResponse()) && proto.openstorage.api.VolumeCreateResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SnapCreateResponse}
 */
proto.openstorage.api.SnapCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SnapCreateResponse;
  return proto.openstorage.api.SnapCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SnapCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SnapCreateResponse}
 */
proto.openstorage.api.SnapCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.VolumeCreateResponse;
      reader.readMessage(value,proto.openstorage.api.VolumeCreateResponse.deserializeBinaryFromReader);
      msg.setVolumeCreateResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SnapCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SnapCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SnapCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SnapCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeCreateResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.VolumeCreateResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional VolumeCreateResponse volume_create_response = 1;
 * @return {?proto.openstorage.api.VolumeCreateResponse}
 */
proto.openstorage.api.SnapCreateResponse.prototype.getVolumeCreateResponse = function() {
  return /** @type{?proto.openstorage.api.VolumeCreateResponse} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeCreateResponse, 1));
};


/** @param {?proto.openstorage.api.VolumeCreateResponse|undefined} value */
proto.openstorage.api.SnapCreateResponse.prototype.setVolumeCreateResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SnapCreateResponse.prototype.clearVolumeCreateResponse = function() {
  this.setVolumeCreateResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SnapCreateResponse.prototype.hasVolumeCreateResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeInfo.displayName = 'proto.openstorage.api.VolumeInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    storage: (f = msg.getStorage()) && proto.openstorage.api.VolumeSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeInfo}
 */
proto.openstorage.api.VolumeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeInfo;
  return proto.openstorage.api.VolumeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeInfo}
 */
proto.openstorage.api.VolumeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = new proto.openstorage.api.VolumeSpec;
      reader.readMessage(value,proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader);
      msg.setStorage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStorage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openstorage.api.VolumeSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.VolumeInfo.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeInfo.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.openstorage.api.VolumeInfo.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeInfo.prototype.setPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional VolumeSpec storage = 3;
 * @return {?proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.VolumeInfo.prototype.getStorage = function() {
  return /** @type{?proto.openstorage.api.VolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeSpec, 3));
};


/** @param {?proto.openstorage.api.VolumeSpec|undefined} value */
proto.openstorage.api.VolumeInfo.prototype.setStorage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.openstorage.api.VolumeInfo.prototype.clearStorage = function() {
  this.setStorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.VolumeInfo.prototype.hasStorage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.VolumeConsumer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.VolumeConsumer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.VolumeConsumer.displayName = 'proto.openstorage.api.VolumeConsumer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.VolumeConsumer.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.VolumeConsumer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.VolumeConsumer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeConsumer.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ownerName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    ownerType: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.VolumeConsumer}
 */
proto.openstorage.api.VolumeConsumer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.VolumeConsumer;
  return proto.openstorage.api.VolumeConsumer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.VolumeConsumer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.VolumeConsumer}
 */
proto.openstorage.api.VolumeConsumer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.VolumeConsumer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.VolumeConsumer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.VolumeConsumer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.VolumeConsumer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOwnerName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOwnerType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.VolumeConsumer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeConsumer.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.openstorage.api.VolumeConsumer.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeConsumer.prototype.setNamespace = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.openstorage.api.VolumeConsumer.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeConsumer.prototype.setType = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string node_id = 4;
 * @return {string}
 */
proto.openstorage.api.VolumeConsumer.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeConsumer.prototype.setNodeId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string owner_name = 5;
 * @return {string}
 */
proto.openstorage.api.VolumeConsumer.prototype.getOwnerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeConsumer.prototype.setOwnerName = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string owner_type = 6;
 * @return {string}
 */
proto.openstorage.api.VolumeConsumer.prototype.getOwnerType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.openstorage.api.VolumeConsumer.prototype.setOwnerType = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.GraphDriverChanges = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.GraphDriverChanges, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.GraphDriverChanges.displayName = 'proto.openstorage.api.GraphDriverChanges';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.GraphDriverChanges.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.GraphDriverChanges.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.GraphDriverChanges} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GraphDriverChanges.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.GraphDriverChanges}
 */
proto.openstorage.api.GraphDriverChanges.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.GraphDriverChanges;
  return proto.openstorage.api.GraphDriverChanges.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.GraphDriverChanges} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.GraphDriverChanges}
 */
proto.openstorage.api.GraphDriverChanges.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {!proto.openstorage.api.GraphDriverChangeType} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.GraphDriverChanges.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.GraphDriverChanges.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.GraphDriverChanges} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GraphDriverChanges.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.openstorage.api.GraphDriverChanges.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.GraphDriverChanges.prototype.setPath = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional GraphDriverChangeType kind = 2;
 * @return {!proto.openstorage.api.GraphDriverChangeType}
 */
proto.openstorage.api.GraphDriverChanges.prototype.getKind = function() {
  return /** @type {!proto.openstorage.api.GraphDriverChangeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.openstorage.api.GraphDriverChangeType} value */
proto.openstorage.api.GraphDriverChanges.prototype.setKind = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.ClusterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.ClusterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.ClusterResponse.displayName = 'proto.openstorage.api.ClusterResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.ClusterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.ClusterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.ClusterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ClusterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.ClusterResponse}
 */
proto.openstorage.api.ClusterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.ClusterResponse;
  return proto.openstorage.api.ClusterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.ClusterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.ClusterResponse}
 */
proto.openstorage.api.ClusterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.ClusterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.ClusterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.ClusterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ClusterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.openstorage.api.ClusterResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.ClusterResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.ActiveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.ActiveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.ActiveRequest.displayName = 'proto.openstorage.api.ActiveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.ActiveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.ActiveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.ActiveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ActiveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reqestkvMap: (f = msg.getReqestkvMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.ActiveRequest}
 */
proto.openstorage.api.ActiveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.ActiveRequest;
  return proto.openstorage.api.ActiveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.ActiveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.ActiveRequest}
 */
proto.openstorage.api.ActiveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getReqestkvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.ActiveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.ActiveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.ActiveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ActiveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReqestkvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<int64, string> ReqestKV = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.openstorage.api.ActiveRequest.prototype.getReqestkvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


proto.openstorage.api.ActiveRequest.prototype.clearReqestkvMap = function() {
  this.getReqestkvMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.ActiveRequests = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.ActiveRequests.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.ActiveRequests, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.ActiveRequests.displayName = 'proto.openstorage.api.ActiveRequests';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.ActiveRequests.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.ActiveRequests.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.ActiveRequests.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.ActiveRequests} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ActiveRequests.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activerequestList: jspb.Message.toObjectList(msg.getActiverequestList(),
    proto.openstorage.api.ActiveRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.ActiveRequests}
 */
proto.openstorage.api.ActiveRequests.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.ActiveRequests;
  return proto.openstorage.api.ActiveRequests.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.ActiveRequests} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.ActiveRequests}
 */
proto.openstorage.api.ActiveRequests.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestcount(value);
      break;
    case 2:
      var value = new proto.openstorage.api.ActiveRequest;
      reader.readMessage(value,proto.openstorage.api.ActiveRequest.deserializeBinaryFromReader);
      msg.addActiverequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.ActiveRequests.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.ActiveRequests.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.ActiveRequests} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.ActiveRequests.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getActiverequestList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.openstorage.api.ActiveRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 RequestCount = 1;
 * @return {number}
 */
proto.openstorage.api.ActiveRequests.prototype.getRequestcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.openstorage.api.ActiveRequests.prototype.setRequestcount = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated ActiveRequest ActiveRequest = 2;
 * @return {!Array.<!proto.openstorage.api.ActiveRequest>}
 */
proto.openstorage.api.ActiveRequests.prototype.getActiverequestList = function() {
  return /** @type{!Array.<!proto.openstorage.api.ActiveRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.ActiveRequest, 2));
};


/** @param {!Array.<!proto.openstorage.api.ActiveRequest>} value */
proto.openstorage.api.ActiveRequests.prototype.setActiverequestList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.openstorage.api.ActiveRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.ActiveRequest}
 */
proto.openstorage.api.ActiveRequests.prototype.addActiverequest = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.openstorage.api.ActiveRequest, opt_index);
};


proto.openstorage.api.ActiveRequests.prototype.clearActiverequestList = function() {
  this.setActiverequestList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.GroupSnapCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.GroupSnapCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.GroupSnapCreateRequest.displayName = 'proto.openstorage.api.GroupSnapCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.GroupSnapCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.GroupSnapCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.GroupSnapCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GroupSnapCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.GroupSnapCreateRequest}
 */
proto.openstorage.api.GroupSnapCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.GroupSnapCreateRequest;
  return proto.openstorage.api.GroupSnapCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.GroupSnapCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.GroupSnapCreateRequest}
 */
proto.openstorage.api.GroupSnapCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.GroupSnapCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.GroupSnapCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.GroupSnapCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GroupSnapCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.GroupSnapCreateRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.GroupSnapCreateRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * map<string, string> Labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.GroupSnapCreateRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.openstorage.api.GroupSnapCreateRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.GroupSnapCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.GroupSnapCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.GroupSnapCreateResponse.displayName = 'proto.openstorage.api.GroupSnapCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.GroupSnapCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.GroupSnapCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.GroupSnapCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GroupSnapCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshotsMap: (f = msg.getSnapshotsMap()) ? f.toObject(includeInstance, proto.openstorage.api.SnapCreateResponse.toObject) : [],
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.GroupSnapCreateResponse}
 */
proto.openstorage.api.GroupSnapCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.GroupSnapCreateResponse;
  return proto.openstorage.api.GroupSnapCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.GroupSnapCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.GroupSnapCreateResponse}
 */
proto.openstorage.api.GroupSnapCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSnapshotsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.openstorage.api.SnapCreateResponse.deserializeBinaryFromReader);
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.GroupSnapCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.GroupSnapCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.GroupSnapCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GroupSnapCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshotsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.openstorage.api.SnapCreateResponse.serializeBinaryToWriter);
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * map<string, SnapCreateResponse> snapshots = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.openstorage.api.SnapCreateResponse>}
 */
proto.openstorage.api.GroupSnapCreateResponse.prototype.getSnapshotsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.openstorage.api.SnapCreateResponse>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.openstorage.api.SnapCreateResponse));
};


proto.openstorage.api.GroupSnapCreateResponse.prototype.clearSnapshotsMap = function() {
  this.getSnapshotsMap().clear();
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.openstorage.api.GroupSnapCreateResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.GroupSnapCreateResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.StorageNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.StorageNode.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.StorageNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.StorageNode.displayName = 'proto.openstorage.api.StorageNode';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.StorageNode.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.StorageNode.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.StorageNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.StorageNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StorageNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cpu: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    memTotal: jspb.Message.getFieldWithDefault(msg, 3, 0),
    memUsed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    memFree: jspb.Message.getFieldWithDefault(msg, 5, 0),
    avgLoad: jspb.Message.getFieldWithDefault(msg, 6, 0),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    disksMap: (f = msg.getDisksMap()) ? f.toObject(includeInstance, proto.openstorage.api.StorageResource.toObject) : [],
    poolsList: jspb.Message.toObjectList(msg.getPoolsList(),
    proto.openstorage.api.StoragePool.toObject, includeInstance),
    mgmtIp: jspb.Message.getFieldWithDefault(msg, 11, ""),
    dataIp: jspb.Message.getFieldWithDefault(msg, 12, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 15, ""),
    nodeLabelsMap: (f = msg.getNodeLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.StorageNode}
 */
proto.openstorage.api.StorageNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.StorageNode;
  return proto.openstorage.api.StorageNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.StorageNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.StorageNode}
 */
proto.openstorage.api.StorageNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpu(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemUsed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemFree(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvgLoad(value);
      break;
    case 7:
      var value = /** @type {!proto.openstorage.api.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = msg.getDisksMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.openstorage.api.StorageResource.deserializeBinaryFromReader);
         });
      break;
    case 10:
      var value = new proto.openstorage.api.StoragePool;
      reader.readMessage(value,proto.openstorage.api.StoragePool.deserializeBinaryFromReader);
      msg.addPools(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMgmtIp(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataIp(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 16:
      var value = msg.getNodeLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.StorageNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.StorageNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.StorageNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StorageNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCpu();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMemTotal();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMemUsed();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMemFree();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getAvgLoad();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDisksMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.openstorage.api.StorageResource.serializeBinaryToWriter);
  }
  f = message.getPoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.openstorage.api.StoragePool.serializeBinaryToWriter
    );
  }
  f = message.getMgmtIp();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDataIp();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getNodeLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.StorageNode.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageNode.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double cpu = 2;
 * @return {number}
 */
proto.openstorage.api.StorageNode.prototype.getCpu = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.openstorage.api.StorageNode.prototype.setCpu = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 mem_total = 3;
 * @return {number}
 */
proto.openstorage.api.StorageNode.prototype.getMemTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageNode.prototype.setMemTotal = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 mem_used = 4;
 * @return {number}
 */
proto.openstorage.api.StorageNode.prototype.getMemUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageNode.prototype.setMemUsed = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 mem_free = 5;
 * @return {number}
 */
proto.openstorage.api.StorageNode.prototype.getMemFree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageNode.prototype.setMemFree = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 avg_load = 6;
 * @return {number}
 */
proto.openstorage.api.StorageNode.prototype.getAvgLoad = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.openstorage.api.StorageNode.prototype.setAvgLoad = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional Status status = 7;
 * @return {!proto.openstorage.api.Status}
 */
proto.openstorage.api.StorageNode.prototype.getStatus = function() {
  return /** @type {!proto.openstorage.api.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.openstorage.api.Status} value */
proto.openstorage.api.StorageNode.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * map<string, StorageResource> disks = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.openstorage.api.StorageResource>}
 */
proto.openstorage.api.StorageNode.prototype.getDisksMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.openstorage.api.StorageResource>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.openstorage.api.StorageResource));
};


proto.openstorage.api.StorageNode.prototype.clearDisksMap = function() {
  this.getDisksMap().clear();
};


/**
 * repeated StoragePool pools = 10;
 * @return {!Array.<!proto.openstorage.api.StoragePool>}
 */
proto.openstorage.api.StorageNode.prototype.getPoolsList = function() {
  return /** @type{!Array.<!proto.openstorage.api.StoragePool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.StoragePool, 10));
};


/** @param {!Array.<!proto.openstorage.api.StoragePool>} value */
proto.openstorage.api.StorageNode.prototype.setPoolsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.openstorage.api.StoragePool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.StoragePool}
 */
proto.openstorage.api.StorageNode.prototype.addPools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.openstorage.api.StoragePool, opt_index);
};


proto.openstorage.api.StorageNode.prototype.clearPoolsList = function() {
  this.setPoolsList([]);
};


/**
 * optional string mgmt_ip = 11;
 * @return {string}
 */
proto.openstorage.api.StorageNode.prototype.getMgmtIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageNode.prototype.setMgmtIp = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string data_ip = 12;
 * @return {string}
 */
proto.openstorage.api.StorageNode.prototype.getDataIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageNode.prototype.setDataIp = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional string hostname = 15;
 * @return {string}
 */
proto.openstorage.api.StorageNode.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageNode.prototype.setHostname = function(value) {
  jspb.Message.setField(this, 15, value);
};


/**
 * map<string, string> node_labels = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.StorageNode.prototype.getNodeLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      null));
};


proto.openstorage.api.StorageNode.prototype.clearNodeLabelsMap = function() {
  this.getNodeLabelsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.StorageCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.StorageCluster.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.StorageCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.StorageCluster.displayName = 'proto.openstorage.api.StorageCluster';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.StorageCluster.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.StorageCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.StorageCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.StorageCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StorageCluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.openstorage.api.StorageNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.StorageCluster}
 */
proto.openstorage.api.StorageCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.StorageCluster;
  return proto.openstorage.api.StorageCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.StorageCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.StorageCluster}
 */
proto.openstorage.api.StorageCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.openstorage.api.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 4:
      var value = new proto.openstorage.api.StorageNode;
      reader.readMessage(value,proto.openstorage.api.StorageNode.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.StorageCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.StorageCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.StorageCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.StorageCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.openstorage.api.StorageNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {!proto.openstorage.api.Status}
 */
proto.openstorage.api.StorageCluster.prototype.getStatus = function() {
  return /** @type {!proto.openstorage.api.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.openstorage.api.Status} value */
proto.openstorage.api.StorageCluster.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.openstorage.api.StorageCluster.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageCluster.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string node_id = 3;
 * @return {string}
 */
proto.openstorage.api.StorageCluster.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.StorageCluster.prototype.setNodeId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated StorageNode nodes = 4;
 * @return {!Array.<!proto.openstorage.api.StorageNode>}
 */
proto.openstorage.api.StorageCluster.prototype.getNodesList = function() {
  return /** @type{!Array.<!proto.openstorage.api.StorageNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.StorageNode, 4));
};


/** @param {!Array.<!proto.openstorage.api.StorageNode>} value */
proto.openstorage.api.StorageCluster.prototype.setNodesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.openstorage.api.StorageNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.StorageNode}
 */
proto.openstorage.api.StorageCluster.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.openstorage.api.StorageNode, opt_index);
};


proto.openstorage.api.StorageCluster.prototype.clearNodesList = function() {
  this.setNodesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyCreateRequest.displayName = 'proto.openstorage.api.SdkSchedulePolicyCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedulepolicy: (f = msg.getSchedulepolicy()) && proto.openstorage.api.SdkSchedulePolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyCreateRequest}
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyCreateRequest;
  return proto.openstorage.api.SdkSchedulePolicyCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyCreateRequest}
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.SdkSchedulePolicy;
      reader.readMessage(value,proto.openstorage.api.SdkSchedulePolicy.deserializeBinaryFromReader);
      msg.setSchedulepolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedulepolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.SdkSchedulePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional SdkSchedulePolicy SchedulePolicy = 1;
 * @return {?proto.openstorage.api.SdkSchedulePolicy}
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.prototype.getSchedulepolicy = function() {
  return /** @type{?proto.openstorage.api.SdkSchedulePolicy} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.SdkSchedulePolicy, 1));
};


/** @param {?proto.openstorage.api.SdkSchedulePolicy|undefined} value */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.prototype.setSchedulepolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkSchedulePolicyCreateRequest.prototype.clearSchedulepolicy = function() {
  this.setSchedulepolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkSchedulePolicyCreateRequest.prototype.hasSchedulepolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyCreateResponse.displayName = 'proto.openstorage.api.SdkSchedulePolicyCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyCreateResponse}
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyCreateResponse;
  return proto.openstorage.api.SdkSchedulePolicyCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyCreateResponse}
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyUpdateRequest.displayName = 'proto.openstorage.api.SdkSchedulePolicyUpdateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedulepolicy: (f = msg.getSchedulepolicy()) && proto.openstorage.api.SdkSchedulePolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyUpdateRequest}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyUpdateRequest;
  return proto.openstorage.api.SdkSchedulePolicyUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyUpdateRequest}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.SdkSchedulePolicy;
      reader.readMessage(value,proto.openstorage.api.SdkSchedulePolicy.deserializeBinaryFromReader);
      msg.setSchedulepolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedulepolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.SdkSchedulePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional SdkSchedulePolicy SchedulePolicy = 1;
 * @return {?proto.openstorage.api.SdkSchedulePolicy}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.prototype.getSchedulepolicy = function() {
  return /** @type{?proto.openstorage.api.SdkSchedulePolicy} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.SdkSchedulePolicy, 1));
};


/** @param {?proto.openstorage.api.SdkSchedulePolicy|undefined} value */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.prototype.setSchedulepolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkSchedulePolicyUpdateRequest.prototype.clearSchedulepolicy = function() {
  this.setSchedulepolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateRequest.prototype.hasSchedulepolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyUpdateResponse.displayName = 'proto.openstorage.api.SdkSchedulePolicyUpdateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyUpdateResponse}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyUpdateResponse;
  return proto.openstorage.api.SdkSchedulePolicyUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyUpdateResponse}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyEnumerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.displayName = 'proto.openstorage.api.SdkSchedulePolicyEnumerateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyEnumerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyEnumerateRequest}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyEnumerateRequest;
  return proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyEnumerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyEnumerateRequest}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyEnumerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyEnumerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.displayName = 'proto.openstorage.api.SdkSchedulePolicyEnumerateResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyEnumerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    proto.openstorage.api.SdkSchedulePolicy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyEnumerateResponse}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyEnumerateResponse;
  return proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyEnumerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyEnumerateResponse}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.SdkSchedulePolicy;
      reader.readMessage(value,proto.openstorage.api.SdkSchedulePolicy.deserializeBinaryFromReader);
      msg.addPolicies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyEnumerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.SdkSchedulePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SdkSchedulePolicy policies = 1;
 * @return {!Array.<!proto.openstorage.api.SdkSchedulePolicy>}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.prototype.getPoliciesList = function() {
  return /** @type{!Array.<!proto.openstorage.api.SdkSchedulePolicy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.SdkSchedulePolicy, 1));
};


/** @param {!Array.<!proto.openstorage.api.SdkSchedulePolicy>} value */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.prototype.setPoliciesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.SdkSchedulePolicy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.SdkSchedulePolicy}
 */
proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.SdkSchedulePolicy, opt_index);
};


proto.openstorage.api.SdkSchedulePolicyEnumerateResponse.prototype.clearPoliciesList = function() {
  this.setPoliciesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyInspectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyInspectRequest.displayName = 'proto.openstorage.api.SdkSchedulePolicyInspectRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyInspectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyInspectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyInspectRequest}
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyInspectRequest;
  return proto.openstorage.api.SdkSchedulePolicyInspectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyInspectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyInspectRequest}
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyInspectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyInspectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkSchedulePolicyInspectRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyInspectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyInspectResponse.displayName = 'proto.openstorage.api.SdkSchedulePolicyInspectResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyInspectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyInspectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && proto.openstorage.api.SdkSchedulePolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyInspectResponse}
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyInspectResponse;
  return proto.openstorage.api.SdkSchedulePolicyInspectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyInspectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyInspectResponse}
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.SdkSchedulePolicy;
      reader.readMessage(value,proto.openstorage.api.SdkSchedulePolicy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyInspectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyInspectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.SdkSchedulePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional SdkSchedulePolicy policy = 1;
 * @return {?proto.openstorage.api.SdkSchedulePolicy}
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.prototype.getPolicy = function() {
  return /** @type{?proto.openstorage.api.SdkSchedulePolicy} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.SdkSchedulePolicy, 1));
};


/** @param {?proto.openstorage.api.SdkSchedulePolicy|undefined} value */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.prototype.setPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkSchedulePolicyInspectResponse.prototype.clearPolicy = function() {
  this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkSchedulePolicyInspectResponse.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyDeleteRequest.displayName = 'proto.openstorage.api.SdkSchedulePolicyDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyDeleteRequest}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyDeleteRequest;
  return proto.openstorage.api.SdkSchedulePolicyDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyDeleteRequest}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkSchedulePolicyDeleteRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicyDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicyDeleteResponse.displayName = 'proto.openstorage.api.SdkSchedulePolicyDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicyDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicyDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicyDeleteResponse}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicyDeleteResponse;
  return proto.openstorage.api.SdkSchedulePolicyDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicyDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicyDeleteResponse}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicyDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicyDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicyDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkSchedulePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkSchedulePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkSchedulePolicy.displayName = 'proto.openstorage.api.SdkSchedulePolicy';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkSchedulePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkSchedulePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkSchedulePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    schedule: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkSchedulePolicy}
 */
proto.openstorage.api.SdkSchedulePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkSchedulePolicy;
  return proto.openstorage.api.SdkSchedulePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkSchedulePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkSchedulePolicy}
 */
proto.openstorage.api.SdkSchedulePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkSchedulePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkSchedulePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkSchedulePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkSchedulePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchedule();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.SdkSchedulePolicy.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkSchedulePolicy.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string schedule = 2;
 * @return {string}
 */
proto.openstorage.api.SdkSchedulePolicy.prototype.getSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkSchedulePolicy.prototype.setSchedule = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialCreateAzureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialCreateAzureRequest.displayName = 'proto.openstorage.api.SdkCredentialCreateAzureRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialCreateAzureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialCreateAzureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credential: (f = msg.getCredential()) && proto.openstorage.api.AzureCredential.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialCreateAzureRequest}
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialCreateAzureRequest;
  return proto.openstorage.api.SdkCredentialCreateAzureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialCreateAzureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialCreateAzureRequest}
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.AzureCredential;
      reader.readMessage(value,proto.openstorage.api.AzureCredential.deserializeBinaryFromReader);
      msg.setCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialCreateAzureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialCreateAzureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.AzureCredential.serializeBinaryToWriter
    );
  }
};


/**
 * optional AzureCredential credential = 1;
 * @return {?proto.openstorage.api.AzureCredential}
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.prototype.getCredential = function() {
  return /** @type{?proto.openstorage.api.AzureCredential} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.AzureCredential, 1));
};


/** @param {?proto.openstorage.api.AzureCredential|undefined} value */
proto.openstorage.api.SdkCredentialCreateAzureRequest.prototype.setCredential = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkCredentialCreateAzureRequest.prototype.clearCredential = function() {
  this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCredentialCreateAzureRequest.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialCreateAzureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialCreateAzureResponse.displayName = 'proto.openstorage.api.SdkCredentialCreateAzureResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialCreateAzureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialCreateAzureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialCreateAzureResponse}
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialCreateAzureResponse;
  return proto.openstorage.api.SdkCredentialCreateAzureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialCreateAzureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialCreateAzureResponse}
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialCreateAzureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialCreateAzureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialCreateAzureResponse.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialCreateAzureResponse.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialCreateGoogleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialCreateGoogleRequest.displayName = 'proto.openstorage.api.SdkCredentialCreateGoogleRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialCreateGoogleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialCreateGoogleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credential: (f = msg.getCredential()) && proto.openstorage.api.GoogleCredential.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialCreateGoogleRequest}
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialCreateGoogleRequest;
  return proto.openstorage.api.SdkCredentialCreateGoogleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialCreateGoogleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialCreateGoogleRequest}
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.GoogleCredential;
      reader.readMessage(value,proto.openstorage.api.GoogleCredential.deserializeBinaryFromReader);
      msg.setCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialCreateGoogleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialCreateGoogleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.GoogleCredential.serializeBinaryToWriter
    );
  }
};


/**
 * optional GoogleCredential credential = 1;
 * @return {?proto.openstorage.api.GoogleCredential}
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.prototype.getCredential = function() {
  return /** @type{?proto.openstorage.api.GoogleCredential} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.GoogleCredential, 1));
};


/** @param {?proto.openstorage.api.GoogleCredential|undefined} value */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.prototype.setCredential = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkCredentialCreateGoogleRequest.prototype.clearCredential = function() {
  this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCredentialCreateGoogleRequest.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialCreateGoogleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialCreateGoogleResponse.displayName = 'proto.openstorage.api.SdkCredentialCreateGoogleResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialCreateGoogleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialCreateGoogleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialCreateGoogleResponse}
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialCreateGoogleResponse;
  return proto.openstorage.api.SdkCredentialCreateGoogleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialCreateGoogleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialCreateGoogleResponse}
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialCreateGoogleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialCreateGoogleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialCreateGoogleResponse.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialCreateAWSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialCreateAWSRequest.displayName = 'proto.openstorage.api.SdkCredentialCreateAWSRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialCreateAWSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialCreateAWSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credential: (f = msg.getCredential()) && proto.openstorage.api.S3Credential.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialCreateAWSRequest}
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialCreateAWSRequest;
  return proto.openstorage.api.SdkCredentialCreateAWSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialCreateAWSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialCreateAWSRequest}
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.S3Credential;
      reader.readMessage(value,proto.openstorage.api.S3Credential.deserializeBinaryFromReader);
      msg.setCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialCreateAWSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialCreateAWSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.S3Credential.serializeBinaryToWriter
    );
  }
};


/**
 * optional S3Credential credential = 1;
 * @return {?proto.openstorage.api.S3Credential}
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.prototype.getCredential = function() {
  return /** @type{?proto.openstorage.api.S3Credential} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.S3Credential, 1));
};


/** @param {?proto.openstorage.api.S3Credential|undefined} value */
proto.openstorage.api.SdkCredentialCreateAWSRequest.prototype.setCredential = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkCredentialCreateAWSRequest.prototype.clearCredential = function() {
  this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCredentialCreateAWSRequest.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialCreateAWSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialCreateAWSResponse.displayName = 'proto.openstorage.api.SdkCredentialCreateAWSResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialCreateAWSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialCreateAWSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialCreateAWSResponse}
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialCreateAWSResponse;
  return proto.openstorage.api.SdkCredentialCreateAWSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialCreateAWSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialCreateAWSResponse}
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialCreateAWSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialCreateAWSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialCreateAWSResponse.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialCreateAWSResponse.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.S3Credential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.S3Credential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.S3Credential.displayName = 'proto.openstorage.api.S3Credential';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.S3Credential.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.S3Credential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.S3Credential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.S3Credential.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    secretKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endpoint: jspb.Message.getFieldWithDefault(msg, 4, ""),
    region: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.S3Credential}
 */
proto.openstorage.api.S3Credential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.S3Credential;
  return proto.openstorage.api.S3Credential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.S3Credential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.S3Credential}
 */
proto.openstorage.api.S3Credential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.S3Credential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.S3Credential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.S3Credential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.S3Credential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecretKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.S3Credential.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.S3Credential.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string access_key = 2;
 * @return {string}
 */
proto.openstorage.api.S3Credential.prototype.getAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.S3Credential.prototype.setAccessKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string secret_key = 3;
 * @return {string}
 */
proto.openstorage.api.S3Credential.prototype.getSecretKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.S3Credential.prototype.setSecretKey = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string endpoint = 4;
 * @return {string}
 */
proto.openstorage.api.S3Credential.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.S3Credential.prototype.setEndpoint = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string region = 5;
 * @return {string}
 */
proto.openstorage.api.S3Credential.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.openstorage.api.S3Credential.prototype.setRegion = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.AzureCredential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.AzureCredential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.AzureCredential.displayName = 'proto.openstorage.api.AzureCredential';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.AzureCredential.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.AzureCredential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.AzureCredential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.AzureCredential.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.AzureCredential}
 */
proto.openstorage.api.AzureCredential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.AzureCredential;
  return proto.openstorage.api.AzureCredential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.AzureCredential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.AzureCredential}
 */
proto.openstorage.api.AzureCredential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.AzureCredential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.AzureCredential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.AzureCredential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.AzureCredential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.AzureCredential.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.AzureCredential.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string account_name = 2;
 * @return {string}
 */
proto.openstorage.api.AzureCredential.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.AzureCredential.prototype.setAccountName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string account_key = 3;
 * @return {string}
 */
proto.openstorage.api.AzureCredential.prototype.getAccountKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.AzureCredential.prototype.setAccountKey = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.GoogleCredential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.GoogleCredential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.GoogleCredential.displayName = 'proto.openstorage.api.GoogleCredential';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.GoogleCredential.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.GoogleCredential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.GoogleCredential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GoogleCredential.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jsonKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.GoogleCredential}
 */
proto.openstorage.api.GoogleCredential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.GoogleCredential;
  return proto.openstorage.api.GoogleCredential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.GoogleCredential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.GoogleCredential}
 */
proto.openstorage.api.GoogleCredential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.GoogleCredential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.GoogleCredential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.GoogleCredential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.GoogleCredential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJsonKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.GoogleCredential.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.GoogleCredential.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.openstorage.api.GoogleCredential.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.GoogleCredential.prototype.setProjectId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string json_key = 3;
 * @return {string}
 */
proto.openstorage.api.GoogleCredential.prototype.getJsonKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.GoogleCredential.prototype.setJsonKey = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialEnumerateAWSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialEnumerateAWSRequest.displayName = 'proto.openstorage.api.SdkCredentialEnumerateAWSRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialEnumerateAWSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAWSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAWSRequest}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialEnumerateAWSRequest;
  return proto.openstorage.api.SdkCredentialEnumerateAWSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAWSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAWSRequest}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialEnumerateAWSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAWSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialEnumerateAWSRequest.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkCredentialEnumerateAWSResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialEnumerateAWSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialEnumerateAWSResponse.displayName = 'proto.openstorage.api.SdkCredentialEnumerateAWSResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialEnumerateAWSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAWSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialList: jspb.Message.toObjectList(msg.getCredentialList(),
    proto.openstorage.api.S3Credential.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAWSResponse}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialEnumerateAWSResponse;
  return proto.openstorage.api.SdkCredentialEnumerateAWSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAWSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAWSResponse}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.S3Credential;
      reader.readMessage(value,proto.openstorage.api.S3Credential.deserializeBinaryFromReader);
      msg.addCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialEnumerateAWSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAWSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.S3Credential.serializeBinaryToWriter
    );
  }
};


/**
 * repeated S3Credential credential = 1;
 * @return {!Array.<!proto.openstorage.api.S3Credential>}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.prototype.getCredentialList = function() {
  return /** @type{!Array.<!proto.openstorage.api.S3Credential>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.S3Credential, 1));
};


/** @param {!Array.<!proto.openstorage.api.S3Credential>} value */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.prototype.setCredentialList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.S3Credential=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.S3Credential}
 */
proto.openstorage.api.SdkCredentialEnumerateAWSResponse.prototype.addCredential = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.S3Credential, opt_index);
};


proto.openstorage.api.SdkCredentialEnumerateAWSResponse.prototype.clearCredentialList = function() {
  this.setCredentialList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialEnumerateAzureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialEnumerateAzureRequest.displayName = 'proto.openstorage.api.SdkCredentialEnumerateAzureRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialEnumerateAzureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAzureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAzureRequest}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialEnumerateAzureRequest;
  return proto.openstorage.api.SdkCredentialEnumerateAzureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAzureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAzureRequest}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialEnumerateAzureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAzureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialEnumerateAzureRequest.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkCredentialEnumerateAzureResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialEnumerateAzureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialEnumerateAzureResponse.displayName = 'proto.openstorage.api.SdkCredentialEnumerateAzureResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialEnumerateAzureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAzureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialList: jspb.Message.toObjectList(msg.getCredentialList(),
    proto.openstorage.api.AzureCredential.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAzureResponse}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialEnumerateAzureResponse;
  return proto.openstorage.api.SdkCredentialEnumerateAzureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAzureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateAzureResponse}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.AzureCredential;
      reader.readMessage(value,proto.openstorage.api.AzureCredential.deserializeBinaryFromReader);
      msg.addCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialEnumerateAzureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateAzureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.AzureCredential.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AzureCredential credential = 1;
 * @return {!Array.<!proto.openstorage.api.AzureCredential>}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.prototype.getCredentialList = function() {
  return /** @type{!Array.<!proto.openstorage.api.AzureCredential>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.AzureCredential, 1));
};


/** @param {!Array.<!proto.openstorage.api.AzureCredential>} value */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.prototype.setCredentialList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.AzureCredential=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.AzureCredential}
 */
proto.openstorage.api.SdkCredentialEnumerateAzureResponse.prototype.addCredential = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.AzureCredential, opt_index);
};


proto.openstorage.api.SdkCredentialEnumerateAzureResponse.prototype.clearCredentialList = function() {
  this.setCredentialList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialEnumerateGoogleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.displayName = 'proto.openstorage.api.SdkCredentialEnumerateGoogleRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialEnumerateGoogleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateGoogleRequest}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialEnumerateGoogleRequest;
  return proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateGoogleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateGoogleRequest}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateGoogleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialEnumerateGoogleRequest.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialEnumerateGoogleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.displayName = 'proto.openstorage.api.SdkCredentialEnumerateGoogleResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialEnumerateGoogleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialList: jspb.Message.toObjectList(msg.getCredentialList(),
    proto.openstorage.api.GoogleCredential.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateGoogleResponse}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialEnumerateGoogleResponse;
  return proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateGoogleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialEnumerateGoogleResponse}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.GoogleCredential;
      reader.readMessage(value,proto.openstorage.api.GoogleCredential.deserializeBinaryFromReader);
      msg.addCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialEnumerateGoogleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.GoogleCredential.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GoogleCredential credential = 1;
 * @return {!Array.<!proto.openstorage.api.GoogleCredential>}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.prototype.getCredentialList = function() {
  return /** @type{!Array.<!proto.openstorage.api.GoogleCredential>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.GoogleCredential, 1));
};


/** @param {!Array.<!proto.openstorage.api.GoogleCredential>} value */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.prototype.setCredentialList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.GoogleCredential=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.GoogleCredential}
 */
proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.prototype.addCredential = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.GoogleCredential, opt_index);
};


proto.openstorage.api.SdkCredentialEnumerateGoogleResponse.prototype.clearCredentialList = function() {
  this.setCredentialList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialDeleteRequest.displayName = 'proto.openstorage.api.SdkCredentialDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialDeleteRequest}
 */
proto.openstorage.api.SdkCredentialDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialDeleteRequest;
  return proto.openstorage.api.SdkCredentialDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialDeleteRequest}
 */
proto.openstorage.api.SdkCredentialDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialDeleteRequest.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialDeleteRequest.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialDeleteResponse.displayName = 'proto.openstorage.api.SdkCredentialDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialDeleteResponse}
 */
proto.openstorage.api.SdkCredentialDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialDeleteResponse;
  return proto.openstorage.api.SdkCredentialDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialDeleteResponse}
 */
proto.openstorage.api.SdkCredentialDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialValidateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialValidateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialValidateRequest.displayName = 'proto.openstorage.api.SdkCredentialValidateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialValidateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialValidateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialValidateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialValidateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialValidateRequest}
 */
proto.openstorage.api.SdkCredentialValidateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialValidateRequest;
  return proto.openstorage.api.SdkCredentialValidateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialValidateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialValidateRequest}
 */
proto.openstorage.api.SdkCredentialValidateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialValidateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialValidateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialValidateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialValidateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCredentialValidateRequest.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCredentialValidateRequest.prototype.setCredentialId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCredentialValidateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCredentialValidateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCredentialValidateResponse.displayName = 'proto.openstorage.api.SdkCredentialValidateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCredentialValidateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCredentialValidateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCredentialValidateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialValidateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCredentialValidateResponse}
 */
proto.openstorage.api.SdkCredentialValidateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCredentialValidateResponse;
  return proto.openstorage.api.SdkCredentialValidateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCredentialValidateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCredentialValidateResponse}
 */
proto.openstorage.api.SdkCredentialValidateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCredentialValidateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCredentialValidateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCredentialValidateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCredentialValidateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeMountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeMountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeMountRequest.displayName = 'proto.openstorage.api.SdkVolumeMountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeMountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeMountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeMountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeMountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mountPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeMountRequest}
 */
proto.openstorage.api.SdkVolumeMountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeMountRequest;
  return proto.openstorage.api.SdkVolumeMountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeMountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeMountRequest}
 */
proto.openstorage.api.SdkVolumeMountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMountPath(value);
      break;
    case 3:
      var value = msg.getOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeMountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeMountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeMountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeMountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMountPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeMountRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeMountRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string mount_path = 2;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeMountRequest.prototype.getMountPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeMountRequest.prototype.setMountPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * map<string, string> options = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.SdkVolumeMountRequest.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.openstorage.api.SdkVolumeMountRequest.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeMountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeMountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeMountResponse.displayName = 'proto.openstorage.api.SdkVolumeMountResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeMountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeMountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeMountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeMountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeMountResponse}
 */
proto.openstorage.api.SdkVolumeMountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeMountResponse;
  return proto.openstorage.api.SdkVolumeMountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeMountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeMountResponse}
 */
proto.openstorage.api.SdkVolumeMountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeMountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeMountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeMountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeMountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeUnmountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeUnmountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeUnmountRequest.displayName = 'proto.openstorage.api.SdkVolumeUnmountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeUnmountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeUnmountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeUnmountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mountPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeUnmountRequest}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeUnmountRequest;
  return proto.openstorage.api.SdkVolumeUnmountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeUnmountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeUnmountRequest}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMountPath(value);
      break;
    case 3:
      var value = msg.getOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeUnmountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeUnmountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeUnmountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMountPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string mount_path = 2;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.getMountPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.setMountPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * map<string, string> options = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.SdkVolumeUnmountRequest.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.openstorage.api.SdkVolumeUnmountRequest.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeUnmountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeUnmountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeUnmountResponse.displayName = 'proto.openstorage.api.SdkVolumeUnmountResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeUnmountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeUnmountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeUnmountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeUnmountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeUnmountResponse}
 */
proto.openstorage.api.SdkVolumeUnmountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeUnmountResponse;
  return proto.openstorage.api.SdkVolumeUnmountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeUnmountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeUnmountResponse}
 */
proto.openstorage.api.SdkVolumeUnmountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeUnmountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeUnmountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeUnmountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeUnmountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeAttachRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeAttachRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeAttachRequest.displayName = 'proto.openstorage.api.SdkVolumeAttachRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeAttachRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeAttachRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeAttachRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeAttachRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeAttachRequest}
 */
proto.openstorage.api.SdkVolumeAttachRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeAttachRequest;
  return proto.openstorage.api.SdkVolumeAttachRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeAttachRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeAttachRequest}
 */
proto.openstorage.api.SdkVolumeAttachRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = msg.getOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeAttachRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeAttachRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeAttachRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeAttachRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeAttachRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeAttachRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * map<string, string> options = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.SdkVolumeAttachRequest.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.openstorage.api.SdkVolumeAttachRequest.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeAttachResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeAttachResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeAttachResponse.displayName = 'proto.openstorage.api.SdkVolumeAttachResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeAttachResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeAttachResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeAttachResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeAttachResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    devicePath: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeAttachResponse}
 */
proto.openstorage.api.SdkVolumeAttachResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeAttachResponse;
  return proto.openstorage.api.SdkVolumeAttachResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeAttachResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeAttachResponse}
 */
proto.openstorage.api.SdkVolumeAttachResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicePath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeAttachResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeAttachResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeAttachResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeAttachResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevicePath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string device_path = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeAttachResponse.prototype.getDevicePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeAttachResponse.prototype.setDevicePath = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeDetachRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeDetachRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeDetachRequest.displayName = 'proto.openstorage.api.SdkVolumeDetachRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeDetachRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeDetachRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeDetachRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDetachRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeDetachRequest}
 */
proto.openstorage.api.SdkVolumeDetachRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeDetachRequest;
  return proto.openstorage.api.SdkVolumeDetachRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeDetachRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeDetachRequest}
 */
proto.openstorage.api.SdkVolumeDetachRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeDetachRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeDetachRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeDetachRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDetachRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeDetachRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeDetachRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeDetachResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeDetachResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeDetachResponse.displayName = 'proto.openstorage.api.SdkVolumeDetachResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeDetachResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeDetachResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeDetachResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDetachResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeDetachResponse}
 */
proto.openstorage.api.SdkVolumeDetachResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeDetachResponse;
  return proto.openstorage.api.SdkVolumeDetachResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeDetachResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeDetachResponse}
 */
proto.openstorage.api.SdkVolumeDetachResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeDetachResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeDetachResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeDetachResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDetachResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeCreateRequest.displayName = 'proto.openstorage.api.SdkVolumeCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    spec: (f = msg.getSpec()) && proto.openstorage.api.VolumeSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeCreateRequest}
 */
proto.openstorage.api.SdkVolumeCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeCreateRequest;
  return proto.openstorage.api.SdkVolumeCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeCreateRequest}
 */
proto.openstorage.api.SdkVolumeCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.openstorage.api.VolumeSpec;
      reader.readMessage(value,proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openstorage.api.VolumeSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional VolumeSpec spec = 2;
 * @return {?proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.getSpec = function() {
  return /** @type{?proto.openstorage.api.VolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeSpec, 2));
};


/** @param {?proto.openstorage.api.VolumeSpec|undefined} value */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.SdkVolumeCreateRequest.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkVolumeCreateRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeCreateResponse.displayName = 'proto.openstorage.api.SdkVolumeCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeCreateResponse}
 */
proto.openstorage.api.SdkVolumeCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeCreateResponse;
  return proto.openstorage.api.SdkVolumeCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeCreateResponse}
 */
proto.openstorage.api.SdkVolumeCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeCreateResponse.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeCreateResponse.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.displayName = 'proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    spec: (f = msg.getSpec()) && proto.openstorage.api.VolumeSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest;
  return proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentId(value);
      break;
    case 3:
      var value = new proto.openstorage.api.VolumeSpec;
      reader.readMessage(value,proto.openstorage.api.VolumeSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openstorage.api.VolumeSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string parent_id = 2;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.setParentId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional VolumeSpec spec = 3;
 * @return {?proto.openstorage.api.VolumeSpec}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.getSpec = function() {
  return /** @type{?proto.openstorage.api.VolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeSpec, 3));
};


/** @param {?proto.openstorage.api.VolumeSpec|undefined} value */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.displayName = 'proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse;
  return proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeCreateFromVolumeIdResponse.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeDeleteRequest.displayName = 'proto.openstorage.api.SdkVolumeDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeDeleteRequest}
 */
proto.openstorage.api.SdkVolumeDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeDeleteRequest;
  return proto.openstorage.api.SdkVolumeDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeDeleteRequest}
 */
proto.openstorage.api.SdkVolumeDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeDeleteRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeDeleteRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeDeleteResponse.displayName = 'proto.openstorage.api.SdkVolumeDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeDeleteResponse}
 */
proto.openstorage.api.SdkVolumeDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeDeleteResponse;
  return proto.openstorage.api.SdkVolumeDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeDeleteResponse}
 */
proto.openstorage.api.SdkVolumeDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeInspectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeInspectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeInspectRequest.displayName = 'proto.openstorage.api.SdkVolumeInspectRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeInspectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeInspectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeInspectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeInspectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeInspectRequest}
 */
proto.openstorage.api.SdkVolumeInspectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeInspectRequest;
  return proto.openstorage.api.SdkVolumeInspectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeInspectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeInspectRequest}
 */
proto.openstorage.api.SdkVolumeInspectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeInspectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeInspectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeInspectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeInspectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeInspectRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeInspectRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeInspectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeInspectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeInspectResponse.displayName = 'proto.openstorage.api.SdkVolumeInspectResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeInspectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeInspectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeInspectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeInspectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volume: (f = msg.getVolume()) && proto.openstorage.api.Volume.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeInspectResponse}
 */
proto.openstorage.api.SdkVolumeInspectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeInspectResponse;
  return proto.openstorage.api.SdkVolumeInspectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeInspectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeInspectResponse}
 */
proto.openstorage.api.SdkVolumeInspectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.Volume;
      reader.readMessage(value,proto.openstorage.api.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeInspectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeInspectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeInspectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeInspectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.Volume.serializeBinaryToWriter
    );
  }
};


/**
 * optional Volume volume = 1;
 * @return {?proto.openstorage.api.Volume}
 */
proto.openstorage.api.SdkVolumeInspectResponse.prototype.getVolume = function() {
  return /** @type{?proto.openstorage.api.Volume} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Volume, 1));
};


/** @param {?proto.openstorage.api.Volume|undefined} value */
proto.openstorage.api.SdkVolumeInspectResponse.prototype.setVolume = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkVolumeInspectResponse.prototype.clearVolume = function() {
  this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkVolumeInspectResponse.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeEnumerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeEnumerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeEnumerateRequest.displayName = 'proto.openstorage.api.SdkVolumeEnumerateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeEnumerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeEnumerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && proto.openstorage.api.VolumeLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeEnumerateRequest}
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeEnumerateRequest;
  return proto.openstorage.api.SdkVolumeEnumerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeEnumerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeEnumerateRequest}
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.VolumeLocator;
      reader.readMessage(value,proto.openstorage.api.VolumeLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeEnumerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeEnumerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.VolumeLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional VolumeLocator locator = 1;
 * @return {?proto.openstorage.api.VolumeLocator}
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.prototype.getLocator = function() {
  return /** @type{?proto.openstorage.api.VolumeLocator} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.VolumeLocator, 1));
};


/** @param {?proto.openstorage.api.VolumeLocator|undefined} value */
proto.openstorage.api.SdkVolumeEnumerateRequest.prototype.setLocator = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkVolumeEnumerateRequest.prototype.clearLocator = function() {
  this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkVolumeEnumerateRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeEnumerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkVolumeEnumerateResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeEnumerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeEnumerateResponse.displayName = 'proto.openstorage.api.SdkVolumeEnumerateResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeEnumerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeEnumerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumesList: jspb.Message.toObjectList(msg.getVolumesList(),
    proto.openstorage.api.Volume.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeEnumerateResponse}
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeEnumerateResponse;
  return proto.openstorage.api.SdkVolumeEnumerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeEnumerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeEnumerateResponse}
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.Volume;
      reader.readMessage(value,proto.openstorage.api.Volume.deserializeBinaryFromReader);
      msg.addVolumes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeEnumerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeEnumerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.Volume.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Volume volumes = 1;
 * @return {!Array.<!proto.openstorage.api.Volume>}
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.prototype.getVolumesList = function() {
  return /** @type{!Array.<!proto.openstorage.api.Volume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.Volume, 1));
};


/** @param {!Array.<!proto.openstorage.api.Volume>} value */
proto.openstorage.api.SdkVolumeEnumerateResponse.prototype.setVolumesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.Volume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.Volume}
 */
proto.openstorage.api.SdkVolumeEnumerateResponse.prototype.addVolumes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.Volume, opt_index);
};


proto.openstorage.api.SdkVolumeEnumerateResponse.prototype.clearVolumesList = function() {
  this.setVolumesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeSnapshotCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeSnapshotCreateRequest.displayName = 'proto.openstorage.api.SdkVolumeSnapshotCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeSnapshotCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeSnapshotCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotCreateRequest}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeSnapshotCreateRequest;
  return proto.openstorage.api.SdkVolumeSnapshotCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotCreateRequest}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeSnapshotCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.openstorage.api.SdkVolumeSnapshotCreateRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeSnapshotCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeSnapshotCreateResponse.displayName = 'proto.openstorage.api.SdkVolumeSnapshotCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeSnapshotCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeSnapshotCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshotId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotCreateResponse}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeSnapshotCreateResponse;
  return proto.openstorage.api.SdkVolumeSnapshotCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotCreateResponse}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeSnapshotCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string snapshot_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeSnapshotCreateResponse.prototype.setSnapshotId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeSnapshotRestoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.displayName = 'proto.openstorage.api.SdkVolumeSnapshotRestoreRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeSnapshotRestoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    snapshotId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotRestoreRequest}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeSnapshotRestoreRequest;
  return proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotRestoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotRestoreRequest}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotRestoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string snapshot_id = 2;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeSnapshotRestoreRequest.prototype.setSnapshotId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeSnapshotRestoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.displayName = 'proto.openstorage.api.SdkVolumeSnapshotRestoreResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeSnapshotRestoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotRestoreResponse}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeSnapshotRestoreResponse;
  return proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotRestoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotRestoreResponse}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotRestoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotRestoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.displayName = 'proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest;
  return proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.openstorage.api.SdkVolumeSnapshotEnumerateRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.displayName = 'proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshotsList: jspb.Message.toObjectList(msg.getSnapshotsList(),
    proto.openstorage.api.Volume.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse;
  return proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.Volume;
      reader.readMessage(value,proto.openstorage.api.Volume.deserializeBinaryFromReader);
      msg.addSnapshots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.Volume.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Volume snapshots = 1;
 * @return {!Array.<!proto.openstorage.api.Volume>}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.prototype.getSnapshotsList = function() {
  return /** @type{!Array.<!proto.openstorage.api.Volume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.Volume, 1));
};


/** @param {!Array.<!proto.openstorage.api.Volume>} value */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.prototype.setSnapshotsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.Volume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.Volume}
 */
proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.prototype.addSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.Volume, opt_index);
};


proto.openstorage.api.SdkVolumeSnapshotEnumerateResponse.prototype.clearSnapshotsList = function() {
  this.setSnapshotsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterEnumerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterEnumerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterEnumerateRequest.displayName = 'proto.openstorage.api.SdkClusterEnumerateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterEnumerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterEnumerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterEnumerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterEnumerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterEnumerateRequest}
 */
proto.openstorage.api.SdkClusterEnumerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterEnumerateRequest;
  return proto.openstorage.api.SdkClusterEnumerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterEnumerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterEnumerateRequest}
 */
proto.openstorage.api.SdkClusterEnumerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterEnumerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterEnumerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterEnumerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterEnumerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterEnumerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterEnumerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterEnumerateResponse.displayName = 'proto.openstorage.api.SdkClusterEnumerateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterEnumerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterEnumerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterEnumerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterEnumerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cluster: (f = msg.getCluster()) && proto.openstorage.api.StorageCluster.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterEnumerateResponse}
 */
proto.openstorage.api.SdkClusterEnumerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterEnumerateResponse;
  return proto.openstorage.api.SdkClusterEnumerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterEnumerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterEnumerateResponse}
 */
proto.openstorage.api.SdkClusterEnumerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.StorageCluster;
      reader.readMessage(value,proto.openstorage.api.StorageCluster.deserializeBinaryFromReader);
      msg.setCluster(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterEnumerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterEnumerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterEnumerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterEnumerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCluster();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.StorageCluster.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageCluster cluster = 1;
 * @return {?proto.openstorage.api.StorageCluster}
 */
proto.openstorage.api.SdkClusterEnumerateResponse.prototype.getCluster = function() {
  return /** @type{?proto.openstorage.api.StorageCluster} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.StorageCluster, 1));
};


/** @param {?proto.openstorage.api.StorageCluster|undefined} value */
proto.openstorage.api.SdkClusterEnumerateResponse.prototype.setCluster = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkClusterEnumerateResponse.prototype.clearCluster = function() {
  this.setCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkClusterEnumerateResponse.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterInspectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterInspectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterInspectRequest.displayName = 'proto.openstorage.api.SdkClusterInspectRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterInspectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterInspectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterInspectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterInspectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterInspectRequest}
 */
proto.openstorage.api.SdkClusterInspectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterInspectRequest;
  return proto.openstorage.api.SdkClusterInspectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterInspectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterInspectRequest}
 */
proto.openstorage.api.SdkClusterInspectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterInspectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterInspectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterInspectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterInspectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkClusterInspectRequest.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkClusterInspectRequest.prototype.setNodeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterInspectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterInspectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterInspectResponse.displayName = 'proto.openstorage.api.SdkClusterInspectResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterInspectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterInspectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterInspectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterInspectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    node: (f = msg.getNode()) && proto.openstorage.api.StorageNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterInspectResponse}
 */
proto.openstorage.api.SdkClusterInspectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterInspectResponse;
  return proto.openstorage.api.SdkClusterInspectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterInspectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterInspectResponse}
 */
proto.openstorage.api.SdkClusterInspectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.StorageNode;
      reader.readMessage(value,proto.openstorage.api.StorageNode.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterInspectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterInspectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterInspectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterInspectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.StorageNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageNode node = 1;
 * @return {?proto.openstorage.api.StorageNode}
 */
proto.openstorage.api.SdkClusterInspectResponse.prototype.getNode = function() {
  return /** @type{?proto.openstorage.api.StorageNode} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.StorageNode, 1));
};


/** @param {?proto.openstorage.api.StorageNode|undefined} value */
proto.openstorage.api.SdkClusterInspectResponse.prototype.setNode = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkClusterInspectResponse.prototype.clearNode = function() {
  this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkClusterInspectResponse.prototype.hasNode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterAlertEnumerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterAlertEnumerateRequest.displayName = 'proto.openstorage.api.SdkClusterAlertEnumerateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterAlertEnumerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterAlertEnumerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeStart: (f = msg.getTimeStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeEnd: (f = msg.getTimeEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    resource: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterAlertEnumerateRequest}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterAlertEnumerateRequest;
  return proto.openstorage.api.SdkClusterAlertEnumerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterAlertEnumerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterAlertEnumerateRequest}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeStart(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeEnd(value);
      break;
    case 3:
      var value = /** @type {!proto.openstorage.api.ResourceType} */ (reader.readEnum());
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterAlertEnumerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterAlertEnumerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp time_start = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.getTimeStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.setTimeStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.clearTimeStart = function() {
  this.setTimeStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.hasTimeStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp time_end = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.getTimeEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.setTimeEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.clearTimeEnd = function() {
  this.setTimeEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.hasTimeEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceType resource = 3;
 * @return {!proto.openstorage.api.ResourceType}
 */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.getResource = function() {
  return /** @type {!proto.openstorage.api.ResourceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.openstorage.api.ResourceType} value */
proto.openstorage.api.SdkClusterAlertEnumerateRequest.prototype.setResource = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterAlertEnumerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterAlertEnumerateResponse.displayName = 'proto.openstorage.api.SdkClusterAlertEnumerateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterAlertEnumerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterAlertEnumerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    alerts: (f = msg.getAlerts()) && proto.openstorage.api.Alerts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterAlertEnumerateResponse}
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterAlertEnumerateResponse;
  return proto.openstorage.api.SdkClusterAlertEnumerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterAlertEnumerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterAlertEnumerateResponse}
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.Alerts;
      reader.readMessage(value,proto.openstorage.api.Alerts.deserializeBinaryFromReader);
      msg.setAlerts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterAlertEnumerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterAlertEnumerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlerts();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.Alerts.serializeBinaryToWriter
    );
  }
};


/**
 * optional Alerts alerts = 1;
 * @return {?proto.openstorage.api.Alerts}
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.prototype.getAlerts = function() {
  return /** @type{?proto.openstorage.api.Alerts} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.Alerts, 1));
};


/** @param {?proto.openstorage.api.Alerts|undefined} value */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.prototype.setAlerts = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkClusterAlertEnumerateResponse.prototype.clearAlerts = function() {
  this.setAlerts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkClusterAlertEnumerateResponse.prototype.hasAlerts = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterAlertClearRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterAlertClearRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterAlertClearRequest.displayName = 'proto.openstorage.api.SdkClusterAlertClearRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterAlertClearRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterAlertClearRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterAlertClearRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertClearRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alertId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterAlertClearRequest}
 */
proto.openstorage.api.SdkClusterAlertClearRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterAlertClearRequest;
  return proto.openstorage.api.SdkClusterAlertClearRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterAlertClearRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterAlertClearRequest}
 */
proto.openstorage.api.SdkClusterAlertClearRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.openstorage.api.ResourceType} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAlertId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterAlertClearRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterAlertClearRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterAlertClearRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertClearRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlertId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ResourceType resource = 1;
 * @return {!proto.openstorage.api.ResourceType}
 */
proto.openstorage.api.SdkClusterAlertClearRequest.prototype.getResource = function() {
  return /** @type {!proto.openstorage.api.ResourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.openstorage.api.ResourceType} value */
proto.openstorage.api.SdkClusterAlertClearRequest.prototype.setResource = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 alert_id = 2;
 * @return {number}
 */
proto.openstorage.api.SdkClusterAlertClearRequest.prototype.getAlertId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.openstorage.api.SdkClusterAlertClearRequest.prototype.setAlertId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterAlertClearResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterAlertClearResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterAlertClearResponse.displayName = 'proto.openstorage.api.SdkClusterAlertClearResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterAlertClearResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterAlertClearResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterAlertClearResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertClearResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterAlertClearResponse}
 */
proto.openstorage.api.SdkClusterAlertClearResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterAlertClearResponse;
  return proto.openstorage.api.SdkClusterAlertClearResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterAlertClearResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterAlertClearResponse}
 */
proto.openstorage.api.SdkClusterAlertClearResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterAlertClearResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterAlertClearResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterAlertClearResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertClearResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterAlertEraseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterAlertEraseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterAlertEraseRequest.displayName = 'proto.openstorage.api.SdkClusterAlertEraseRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterAlertEraseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterAlertEraseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alertId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterAlertEraseRequest}
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterAlertEraseRequest;
  return proto.openstorage.api.SdkClusterAlertEraseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterAlertEraseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterAlertEraseRequest}
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.openstorage.api.ResourceType} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAlertId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterAlertEraseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterAlertEraseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlertId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ResourceType resource = 1;
 * @return {!proto.openstorage.api.ResourceType}
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.prototype.getResource = function() {
  return /** @type {!proto.openstorage.api.ResourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.openstorage.api.ResourceType} value */
proto.openstorage.api.SdkClusterAlertEraseRequest.prototype.setResource = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 alert_id = 2;
 * @return {number}
 */
proto.openstorage.api.SdkClusterAlertEraseRequest.prototype.getAlertId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.openstorage.api.SdkClusterAlertEraseRequest.prototype.setAlertId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkClusterAlertEraseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkClusterAlertEraseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkClusterAlertEraseResponse.displayName = 'proto.openstorage.api.SdkClusterAlertEraseResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkClusterAlertEraseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkClusterAlertEraseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkClusterAlertEraseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEraseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkClusterAlertEraseResponse}
 */
proto.openstorage.api.SdkClusterAlertEraseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkClusterAlertEraseResponse;
  return proto.openstorage.api.SdkClusterAlertEraseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkClusterAlertEraseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkClusterAlertEraseResponse}
 */
proto.openstorage.api.SdkClusterAlertEraseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkClusterAlertEraseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkClusterAlertEraseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkClusterAlertEraseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkClusterAlertEraseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreInspectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreInspectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreInspectRequest.displayName = 'proto.openstorage.api.SdkObjectstoreInspectRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreInspectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreInspectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectstoreId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreInspectRequest}
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreInspectRequest;
  return proto.openstorage.api.SdkObjectstoreInspectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreInspectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreInspectRequest}
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectstoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreInspectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreInspectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectstoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string objectstore_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkObjectstoreInspectRequest.prototype.getObjectstoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkObjectstoreInspectRequest.prototype.setObjectstoreId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreInspectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreInspectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreInspectResponse.displayName = 'proto.openstorage.api.SdkObjectstoreInspectResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreInspectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreInspectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectstoreStatus: (f = msg.getObjectstoreStatus()) && proto.openstorage.api.ObjectstoreInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreInspectResponse}
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreInspectResponse;
  return proto.openstorage.api.SdkObjectstoreInspectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreInspectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreInspectResponse}
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.ObjectstoreInfo;
      reader.readMessage(value,proto.openstorage.api.ObjectstoreInfo.deserializeBinaryFromReader);
      msg.setObjectstoreStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreInspectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreInspectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectstoreStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.ObjectstoreInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectstoreInfo objectstore_status = 1;
 * @return {?proto.openstorage.api.ObjectstoreInfo}
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.prototype.getObjectstoreStatus = function() {
  return /** @type{?proto.openstorage.api.ObjectstoreInfo} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.ObjectstoreInfo, 1));
};


/** @param {?proto.openstorage.api.ObjectstoreInfo|undefined} value */
proto.openstorage.api.SdkObjectstoreInspectResponse.prototype.setObjectstoreStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkObjectstoreInspectResponse.prototype.clearObjectstoreStatus = function() {
  this.setObjectstoreStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkObjectstoreInspectResponse.prototype.hasObjectstoreStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreCreateRequest.displayName = 'proto.openstorage.api.SdkObjectstoreCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreCreateRequest}
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreCreateRequest;
  return proto.openstorage.api.SdkObjectstoreCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreCreateRequest}
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string volume_name = 1;
 * @return {string}
 */
proto.openstorage.api.SdkObjectstoreCreateRequest.prototype.getVolumeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkObjectstoreCreateRequest.prototype.setVolumeName = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreCreateResponse.displayName = 'proto.openstorage.api.SdkObjectstoreCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectstoreStatus: (f = msg.getObjectstoreStatus()) && proto.openstorage.api.ObjectstoreInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreCreateResponse}
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreCreateResponse;
  return proto.openstorage.api.SdkObjectstoreCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreCreateResponse}
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.ObjectstoreInfo;
      reader.readMessage(value,proto.openstorage.api.ObjectstoreInfo.deserializeBinaryFromReader);
      msg.setObjectstoreStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectstoreStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openstorage.api.ObjectstoreInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectstoreInfo objectstore_status = 1;
 * @return {?proto.openstorage.api.ObjectstoreInfo}
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.prototype.getObjectstoreStatus = function() {
  return /** @type{?proto.openstorage.api.ObjectstoreInfo} */ (
    jspb.Message.getWrapperField(this, proto.openstorage.api.ObjectstoreInfo, 1));
};


/** @param {?proto.openstorage.api.ObjectstoreInfo|undefined} value */
proto.openstorage.api.SdkObjectstoreCreateResponse.prototype.setObjectstoreStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.openstorage.api.SdkObjectstoreCreateResponse.prototype.clearObjectstoreStatus = function() {
  this.setObjectstoreStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkObjectstoreCreateResponse.prototype.hasObjectstoreStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreDeleteRequest.displayName = 'proto.openstorage.api.SdkObjectstoreDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectstoreId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreDeleteRequest}
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreDeleteRequest;
  return proto.openstorage.api.SdkObjectstoreDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreDeleteRequest}
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectstoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectstoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string objectstore_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkObjectstoreDeleteRequest.prototype.getObjectstoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkObjectstoreDeleteRequest.prototype.setObjectstoreId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreDeleteResponse.displayName = 'proto.openstorage.api.SdkObjectstoreDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreDeleteResponse}
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreDeleteResponse;
  return proto.openstorage.api.SdkObjectstoreDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreDeleteResponse}
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreUpdateRequest.displayName = 'proto.openstorage.api.SdkObjectstoreUpdateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectstoreId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enable: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreUpdateRequest}
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreUpdateRequest;
  return proto.openstorage.api.SdkObjectstoreUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreUpdateRequest}
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectstoreId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectstoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string objectstore_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.prototype.getObjectstoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkObjectstoreUpdateRequest.prototype.setObjectstoreId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool enable = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.SdkObjectstoreUpdateRequest.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.openstorage.api.SdkObjectstoreUpdateRequest.prototype.setEnable = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkObjectstoreUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkObjectstoreUpdateResponse.displayName = 'proto.openstorage.api.SdkObjectstoreUpdateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkObjectstoreUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkObjectstoreUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkObjectstoreUpdateResponse}
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkObjectstoreUpdateResponse;
  return proto.openstorage.api.SdkObjectstoreUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkObjectstoreUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkObjectstoreUpdateResponse}
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkObjectstoreUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkObjectstoreUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkObjectstoreUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupCreateRequest.displayName = 'proto.openstorage.api.SdkCloudBackupCreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    credentialUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    full: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupCreateRequest}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupCreateRequest;
  return proto.openstorage.api.SdkCloudBackupCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupCreateRequest}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialUuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFull(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCredentialUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFull();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.getVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.setVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string credential_uuid = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.getCredentialUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.setCredentialUuid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool full = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.getFull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.openstorage.api.SdkCloudBackupCreateRequest.prototype.setFull = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupCreateResponse.displayName = 'proto.openstorage.api.SdkCloudBackupCreateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupCreateResponse}
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupCreateResponse;
  return proto.openstorage.api.SdkCloudBackupCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupCreateResponse}
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupCreateResponse.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupCreateResponse.prototype.setBackupId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupRestoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupRestoreRequest.displayName = 'proto.openstorage.api.SdkCloudBackupRestoreRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupRestoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupRestoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    restoreVolumeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    credentialUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupRestoreRequest}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupRestoreRequest;
  return proto.openstorage.api.SdkCloudBackupRestoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupRestoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupRestoreRequest}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestoreVolumeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupRestoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupRestoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRestoreVolumeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCredentialUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.setBackupId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string restore_volume_name = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.getRestoreVolumeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.setRestoreVolumeName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string credential_uuid = 3;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.getCredentialUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.setCredentialUuid = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string node_id = 4;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupRestoreRequest.prototype.setNodeId = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupRestoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupRestoreResponse.displayName = 'proto.openstorage.api.SdkCloudBackupRestoreResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupRestoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupRestoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    restoreVolumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupRestoreResponse}
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupRestoreResponse;
  return proto.openstorage.api.SdkCloudBackupRestoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupRestoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupRestoreResponse}
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestoreVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupRestoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupRestoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestoreVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string restore_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupRestoreResponse.prototype.getRestoreVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupRestoreResponse.prototype.setRestoreVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupDeleteRequest.displayName = 'proto.openstorage.api.SdkCloudBackupDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    credentialUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    force: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteRequest}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupDeleteRequest;
  return proto.openstorage.api.SdkCloudBackupDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteRequest}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialUuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCredentialUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.setBackupId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string credential_uuid = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.getCredentialUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.setCredentialUuid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool force = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.openstorage.api.SdkCloudBackupDeleteRequest.prototype.setForce = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupDeleteResponse.displayName = 'proto.openstorage.api.SdkCloudBackupDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteResponse}
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupDeleteResponse;
  return proto.openstorage.api.SdkCloudBackupDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteResponse}
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupDeleteAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupDeleteAllRequest.displayName = 'proto.openstorage.api.SdkCloudBackupDeleteAllRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupDeleteAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    credentialUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteAllRequest}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupDeleteAllRequest;
  return proto.openstorage.api.SdkCloudBackupDeleteAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteAllRequest}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupDeleteAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCredentialUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string src_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string credential_uuid = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.prototype.getCredentialUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupDeleteAllRequest.prototype.setCredentialUuid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupDeleteAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupDeleteAllResponse.displayName = 'proto.openstorage.api.SdkCloudBackupDeleteAllResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupDeleteAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteAllResponse}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupDeleteAllResponse;
  return proto.openstorage.api.SdkCloudBackupDeleteAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupDeleteAllResponse}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupDeleteAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupDeleteAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupDeleteAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupEnumerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupEnumerateRequest.displayName = 'proto.openstorage.api.SdkCloudBackupEnumerateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupEnumerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupEnumerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    credentialUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    all: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupEnumerateRequest}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupEnumerateRequest;
  return proto.openstorage.api.SdkCloudBackupEnumerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupEnumerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupEnumerateRequest}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialUuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupEnumerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupEnumerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCredentialUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string src_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string cluster_id = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.setClusterId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string credential_uuid = 3;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.getCredentialUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.setCredentialUuid = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bool all = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.openstorage.api.SdkCloudBackupEnumerateRequest.prototype.setAll = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupInfo.displayName = 'proto.openstorage.api.SdkCloudBackupInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    srcVolumeName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupInfo}
 */
proto.openstorage.api.SdkCloudBackupInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupInfo;
  return proto.openstorage.api.SdkCloudBackupInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupInfo}
 */
proto.openstorage.api.SdkCloudBackupInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeName(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 5:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 6:
      var value = /** @type {!proto.openstorage.api.SdkCloudBackupStatusType} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSrcVolumeName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupInfo.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string src_volume_id = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupInfo.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string src_volume_name = 3;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.getSrcVolumeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupInfo.prototype.setSrcVolumeName = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.SdkCloudBackupInfo.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.openstorage.api.SdkCloudBackupInfo.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> metadata = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


proto.openstorage.api.SdkCloudBackupInfo.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
};


/**
 * optional SdkCloudBackupStatusType status = 6;
 * @return {!proto.openstorage.api.SdkCloudBackupStatusType}
 */
proto.openstorage.api.SdkCloudBackupInfo.prototype.getStatus = function() {
  return /** @type {!proto.openstorage.api.SdkCloudBackupStatusType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.openstorage.api.SdkCloudBackupStatusType} value */
proto.openstorage.api.SdkCloudBackupInfo.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkCloudBackupEnumerateResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupEnumerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupEnumerateResponse.displayName = 'proto.openstorage.api.SdkCloudBackupEnumerateResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupEnumerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupEnumerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupsList: jspb.Message.toObjectList(msg.getBackupsList(),
    proto.openstorage.api.SdkCloudBackupInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupEnumerateResponse}
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupEnumerateResponse;
  return proto.openstorage.api.SdkCloudBackupEnumerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupEnumerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupEnumerateResponse}
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.SdkCloudBackupInfo;
      reader.readMessage(value,proto.openstorage.api.SdkCloudBackupInfo.deserializeBinaryFromReader);
      msg.addBackups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupEnumerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupEnumerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.SdkCloudBackupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SdkCloudBackupInfo backups = 1;
 * @return {!Array.<!proto.openstorage.api.SdkCloudBackupInfo>}
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.prototype.getBackupsList = function() {
  return /** @type{!Array.<!proto.openstorage.api.SdkCloudBackupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.SdkCloudBackupInfo, 1));
};


/** @param {!Array.<!proto.openstorage.api.SdkCloudBackupInfo>} value */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.prototype.setBackupsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.SdkCloudBackupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.SdkCloudBackupInfo}
 */
proto.openstorage.api.SdkCloudBackupEnumerateResponse.prototype.addBackups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.SdkCloudBackupInfo, opt_index);
};


proto.openstorage.api.SdkCloudBackupEnumerateResponse.prototype.clearBackupsList = function() {
  this.setBackupsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupStatus.displayName = 'proto.openstorage.api.SdkCloudBackupStatus';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bytesDone: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    completedTime: (f = msg.getCompletedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nodeId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupStatus}
 */
proto.openstorage.api.SdkCloudBackupStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupStatus;
  return proto.openstorage.api.SdkCloudBackupStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupStatus}
 */
proto.openstorage.api.SdkCloudBackupStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
      break;
    case 2:
      var value = /** @type {!proto.openstorage.api.SdkCloudBackupOpType} */ (reader.readEnum());
      msg.setOptype(value);
      break;
    case 3:
      var value = /** @type {!proto.openstorage.api.SdkCloudBackupStatusType} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesDone(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBytesDone();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompletedTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setBackupId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional SdkCloudBackupOpType optype = 2;
 * @return {!proto.openstorage.api.SdkCloudBackupOpType}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getOptype = function() {
  return /** @type {!proto.openstorage.api.SdkCloudBackupOpType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.openstorage.api.SdkCloudBackupOpType} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setOptype = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional SdkCloudBackupStatusType status = 3;
 * @return {!proto.openstorage.api.SdkCloudBackupStatusType}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getStatus = function() {
  return /** @type {!proto.openstorage.api.SdkCloudBackupStatusType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.openstorage.api.SdkCloudBackupStatusType} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 bytes_done = 4;
 * @return {number}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getBytesDone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setBytesDone = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.openstorage.api.SdkCloudBackupStatus.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp completed_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getCompletedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setCompletedTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.openstorage.api.SdkCloudBackupStatus.prototype.clearCompletedTime = function() {
  this.setCompletedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.hasCompletedTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string node_id = 7;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupStatus.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupStatus.prototype.setNodeId = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupStatusRequest.displayName = 'proto.openstorage.api.SdkCloudBackupStatusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    local: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupStatusRequest}
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupStatusRequest;
  return proto.openstorage.api.SdkCloudBackupStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupStatusRequest}
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocal();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string src_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupStatusRequest.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool local = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.openstorage.api.SdkCloudBackupStatusRequest.prototype.getLocal = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.openstorage.api.SdkCloudBackupStatusRequest.prototype.setLocal = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupStatusResponse.displayName = 'proto.openstorage.api.SdkCloudBackupStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusesMap: (f = msg.getStatusesMap()) ? f.toObject(includeInstance, proto.openstorage.api.SdkCloudBackupStatus.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupStatusResponse}
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupStatusResponse;
  return proto.openstorage.api.SdkCloudBackupStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupStatusResponse}
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getStatusesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.openstorage.api.SdkCloudBackupStatus.deserializeBinaryFromReader);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.openstorage.api.SdkCloudBackupStatus.serializeBinaryToWriter);
  }
};


/**
 * map<string, SdkCloudBackupStatus> statuses = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.openstorage.api.SdkCloudBackupStatus>}
 */
proto.openstorage.api.SdkCloudBackupStatusResponse.prototype.getStatusesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.openstorage.api.SdkCloudBackupStatus>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.openstorage.api.SdkCloudBackupStatus));
};


proto.openstorage.api.SdkCloudBackupStatusResponse.prototype.clearStatusesMap = function() {
  this.getStatusesMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupCatalogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupCatalogRequest.displayName = 'proto.openstorage.api.SdkCloudBackupCatalogRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupCatalogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupCatalogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    credentialUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupCatalogRequest}
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupCatalogRequest;
  return proto.openstorage.api.SdkCloudBackupCatalogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupCatalogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupCatalogRequest}
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupCatalogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupCatalogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCredentialUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupCatalogRequest.prototype.setBackupId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string credential_uuid = 2;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupCatalogRequest.prototype.getCredentialUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupCatalogRequest.prototype.setCredentialUuid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkCloudBackupCatalogResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupCatalogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupCatalogResponse.displayName = 'proto.openstorage.api.SdkCloudBackupCatalogResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupCatalogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupCatalogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupCatalogResponse}
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupCatalogResponse;
  return proto.openstorage.api.SdkCloudBackupCatalogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupCatalogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupCatalogResponse}
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupCatalogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupCatalogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string contents = 1;
 * @return {!Array.<string>}
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.prototype.getContentsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<string>} value */
proto.openstorage.api.SdkCloudBackupCatalogResponse.prototype.setContentsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.openstorage.api.SdkCloudBackupCatalogResponse.prototype.addContents = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.openstorage.api.SdkCloudBackupCatalogResponse.prototype.clearContentsList = function() {
  this.setContentsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupHistoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupHistoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupHistoryItem.displayName = 'proto.openstorage.api.SdkCloudBackupHistoryItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupHistoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryItem}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupHistoryItem;
  return proto.openstorage.api.SdkCloudBackupHistoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryItem}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.openstorage.api.SdkCloudBackupStatusType} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupHistoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string src_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SdkCloudBackupStatusType status = 3;
 * @return {!proto.openstorage.api.SdkCloudBackupStatusType}
 */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.getStatus = function() {
  return /** @type {!proto.openstorage.api.SdkCloudBackupStatusType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.openstorage.api.SdkCloudBackupStatusType} value */
proto.openstorage.api.SdkCloudBackupHistoryItem.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupHistoryRequest.displayName = 'proto.openstorage.api.SdkCloudBackupHistoryRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryRequest}
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupHistoryRequest;
  return proto.openstorage.api.SdkCloudBackupHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryRequest}
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string src_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupHistoryRequest.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupHistoryRequest.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openstorage.api.SdkCloudBackupHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupHistoryResponse.displayName = 'proto.openstorage.api.SdkCloudBackupHistoryResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyListList: jspb.Message.toObjectList(msg.getHistoryListList(),
    proto.openstorage.api.SdkCloudBackupHistoryItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryResponse}
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupHistoryResponse;
  return proto.openstorage.api.SdkCloudBackupHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryResponse}
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openstorage.api.SdkCloudBackupHistoryItem;
      reader.readMessage(value,proto.openstorage.api.SdkCloudBackupHistoryItem.deserializeBinaryFromReader);
      msg.addHistoryList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openstorage.api.SdkCloudBackupHistoryItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SdkCloudBackupHistoryItem history_list = 1;
 * @return {!Array.<!proto.openstorage.api.SdkCloudBackupHistoryItem>}
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.prototype.getHistoryListList = function() {
  return /** @type{!Array.<!proto.openstorage.api.SdkCloudBackupHistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openstorage.api.SdkCloudBackupHistoryItem, 1));
};


/** @param {!Array.<!proto.openstorage.api.SdkCloudBackupHistoryItem>} value */
proto.openstorage.api.SdkCloudBackupHistoryResponse.prototype.setHistoryListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openstorage.api.SdkCloudBackupHistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openstorage.api.SdkCloudBackupHistoryItem}
 */
proto.openstorage.api.SdkCloudBackupHistoryResponse.prototype.addHistoryList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openstorage.api.SdkCloudBackupHistoryItem, opt_index);
};


proto.openstorage.api.SdkCloudBackupHistoryResponse.prototype.clearHistoryListList = function() {
  this.setHistoryListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupStateChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupStateChangeRequest.displayName = 'proto.openstorage.api.SdkCloudBackupStateChangeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupStateChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupStateChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcVolumeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestedState: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupStateChangeRequest}
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupStateChangeRequest;
  return proto.openstorage.api.SdkCloudBackupStateChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupStateChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupStateChangeRequest}
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVolumeId(value);
      break;
    case 2:
      var value = /** @type {!proto.openstorage.api.SdkCloudBackupRequestedState} */ (reader.readEnum());
      msg.setRequestedState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupStateChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupStateChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVolumeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestedState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string src_volume_id = 1;
 * @return {string}
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.prototype.getSrcVolumeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.prototype.setSrcVolumeId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional SdkCloudBackupRequestedState requested_state = 2;
 * @return {!proto.openstorage.api.SdkCloudBackupRequestedState}
 */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.prototype.getRequestedState = function() {
  return /** @type {!proto.openstorage.api.SdkCloudBackupRequestedState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.openstorage.api.SdkCloudBackupRequestedState} value */
proto.openstorage.api.SdkCloudBackupStateChangeRequest.prototype.setRequestedState = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openstorage.api.SdkCloudBackupStateChangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.openstorage.api.SdkCloudBackupStateChangeResponse.displayName = 'proto.openstorage.api.SdkCloudBackupStateChangeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.openstorage.api.SdkCloudBackupStateChangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openstorage.api.SdkCloudBackupStateChangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openstorage.api.SdkCloudBackupStateChangeResponse}
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openstorage.api.SdkCloudBackupStateChangeResponse;
  return proto.openstorage.api.SdkCloudBackupStateChangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openstorage.api.SdkCloudBackupStateChangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openstorage.api.SdkCloudBackupStateChangeResponse}
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openstorage.api.SdkCloudBackupStateChangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openstorage.api.SdkCloudBackupStateChangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openstorage.api.SdkCloudBackupStateChangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.openstorage.api.Status = {
  STATUS_NONE: 0,
  STATUS_INIT: 1,
  STATUS_OK: 2,
  STATUS_OFFLINE: 3,
  STATUS_ERROR: 4,
  STATUS_NOT_IN_QUORUM: 5,
  STATUS_DECOMMISSION: 6,
  STATUS_MAINTENANCE: 7,
  STATUS_STORAGE_DOWN: 8,
  STATUS_STORAGE_DEGRADED: 9,
  STATUS_NEEDS_REBOOT: 10,
  STATUS_STORAGE_REBALANCE: 11,
  STATUS_STORAGE_DRIVE_REPLACE: 12,
  STATUS_NOT_IN_QUORUM_NO_STORAGE: 13,
  STATUS_MAX: 14
};

/**
 * @enum {number}
 */
proto.openstorage.api.DriverType = {
  DRIVER_TYPE_NONE: 0,
  DRIVER_TYPE_FILE: 1,
  DRIVER_TYPE_BLOCK: 2,
  DRIVER_TYPE_OBJECT: 3,
  DRIVER_TYPE_CLUSTERED: 4,
  DRIVER_TYPE_GRAPH: 5
};

/**
 * @enum {number}
 */
proto.openstorage.api.FSType = {
  FS_TYPE_NONE: 0,
  FS_TYPE_BTRFS: 1,
  FS_TYPE_EXT4: 2,
  FS_TYPE_FUSE: 3,
  FS_TYPE_NFS: 4,
  FS_TYPE_VFS: 5,
  FS_TYPE_XFS: 6,
  FS_TYPE_ZFS: 7
};

/**
 * @enum {number}
 */
proto.openstorage.api.GraphDriverChangeType = {
  GRAPH_DRIVER_CHANGE_TYPE_NONE: 0,
  GRAPH_DRIVER_CHANGE_TYPE_MODIFIED: 1,
  GRAPH_DRIVER_CHANGE_TYPE_ADDED: 2,
  GRAPH_DRIVER_CHANGE_TYPE_DELETED: 3
};

/**
 * @enum {number}
 */
proto.openstorage.api.SeverityType = {
  SEVERITY_TYPE_NONE: 0,
  SEVERITY_TYPE_ALARM: 1,
  SEVERITY_TYPE_WARNING: 2,
  SEVERITY_TYPE_NOTIFY: 3
};

/**
 * @enum {number}
 */
proto.openstorage.api.ResourceType = {
  RESOURCE_TYPE_NONE: 0,
  RESOURCE_TYPE_VOLUME: 1,
  RESOURCE_TYPE_NODE: 2,
  RESOURCE_TYPE_CLUSTER: 3,
  RESOURCE_TYPE_DRIVE: 4
};

/**
 * @enum {number}
 */
proto.openstorage.api.AlertActionType = {
  ALERT_ACTION_TYPE_NONE: 0,
  ALERT_ACTION_TYPE_DELETE: 1,
  ALERT_ACTION_TYPE_CREATE: 2,
  ALERT_ACTION_TYPE_UPDATE: 3
};

/**
 * @enum {number}
 */
proto.openstorage.api.VolumeActionParam = {
  VOLUME_ACTION_PARAM_NONE: 0,
  VOLUME_ACTION_PARAM_OFF: 1,
  VOLUME_ACTION_PARAM_ON: 2
};

/**
 * @enum {number}
 */
proto.openstorage.api.CosType = {
  NONE: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3
};

/**
 * @enum {number}
 */
proto.openstorage.api.IoProfile = {
  IO_PROFILE_SEQUENTIAL: 0,
  IO_PROFILE_RANDOM: 1,
  IO_PROFILE_DB: 2,
  IO_PROFILE_DB_REMOTE: 3,
  IO_PROFILE_CMS: 4
};

/**
 * @enum {number}
 */
proto.openstorage.api.VolumeState = {
  VOLUME_STATE_NONE: 0,
  VOLUME_STATE_PENDING: 1,
  VOLUME_STATE_AVAILABLE: 2,
  VOLUME_STATE_ATTACHED: 3,
  VOLUME_STATE_DETACHED: 4,
  VOLUME_STATE_DETATCHING: 5,
  VOLUME_STATE_ERROR: 6,
  VOLUME_STATE_DELETED: 7,
  VOLUME_STATE_TRY_DETACHING: 8,
  VOLUME_STATE_RESTORE: 9
};

/**
 * @enum {number}
 */
proto.openstorage.api.VolumeStatus = {
  VOLUME_STATUS_NONE: 0,
  VOLUME_STATUS_NOT_PRESENT: 1,
  VOLUME_STATUS_UP: 2,
  VOLUME_STATUS_DOWN: 3,
  VOLUME_STATUS_DEGRADED: 4
};

/**
 * @enum {number}
 */
proto.openstorage.api.StorageMedium = {
  STORAGE_MEDIUM_MAGNETIC: 0,
  STORAGE_MEDIUM_SSD: 1,
  STORAGE_MEDIUM_NVME: 2
};

/**
 * @enum {number}
 */
proto.openstorage.api.ClusterNotify = {
  CLUSTER_NOTIFY_DOWN: 0
};

/**
 * @enum {number}
 */
proto.openstorage.api.AttachState = {
  ATTACH_STATE_EXTERNAL: 0,
  ATTACH_STATE_INTERNAL: 1,
  ATTACH_STATE_INTERNAL_SWITCH: 2
};

/**
 * @enum {number}
 */
proto.openstorage.api.OperationFlags = {
  OP_FLAGS_UNKNOWN: 0,
  OP_FLAGS_NONE: 1,
  OP_FLAGS_DETACH_FORCE: 2
};

/**
 * @enum {number}
 */
proto.openstorage.api.SdkCloudBackupOpType = {
  SDKCLOUDBACKUPOPTYPEUNKNOWN: 0,
  SDKCLOUDBACKUPOPTYPEBACKUPOP: 1,
  SDKCLOUDBACKUPOPTYPERESTOREOP: 2
};

/**
 * @enum {number}
 */
proto.openstorage.api.SdkCloudBackupStatusType = {
  SDKCLOUDBACKUPSTATUSTYPEUNKNOWN: 0,
  SDKCLOUDBACKUPSTATUSTYPENOTSTARTED: 1,
  SDKCLOUDBACKUPSTATUSTYPEDONE: 2,
  SDKCLOUDBACKUPSTATUSTYPEABORTED: 3,
  SDKCLOUDBACKUPSTATUSTYPEPAUSED: 4,
  SDKCLOUDBACKUPSTATUSTYPESTOPPED: 5,
  SDKCLOUDBACKUPSTATUSTYPEACTIVE: 6,
  SDKCLOUDBACKUPSTATUSTYPEFAILED: 7
};

/**
 * @enum {number}
 */
proto.openstorage.api.SdkCloudBackupRequestedState = {
  SDKCLOUDBACKUPREQUESTEDSTATEUNKNOWN: 0,
  SDKCLOUDBACKUPREQUESTEDSTATEPAUSE: 1,
  SDKCLOUDBACKUPREQUESTEDSTATERESUME: 2,
  SDKCLOUDBACKUPREQUESTEDSTATESTOP: 3
};

goog.object.extend(exports, proto.openstorage.api);

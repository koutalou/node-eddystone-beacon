// Advertis Eddystone-UID

var Beacon = require('./lib/beacon');
var eddystoneBeacon = new Beacon();

var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';

eddystoneBeacon.advertiseUid(namespaceId, instanceId);

// Advertis Eddystone-URL

var Beacon = require('./lib/beacon');
var eddystoneBeacon = new Beacon();

var url = 'http://www.google.com';

eddystoneBeacon.advertiseUrl(url);
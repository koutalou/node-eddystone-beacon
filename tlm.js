// Advertis Eddystone-TLM

var Beacon = require('./lib/beacon');
var eddystoneBeacon = new Beacon();

var randomBatteryVoltage = Math.floor((Math.random() * 9500) + 500); // between 500 and 10,000
var randomTemperature = (Math.random() * 5.0) + 20.0; // between -128.0 and 128.0
var intervalSec = 10 * 1000;

eddystoneBeacon.advertiseTlm();

setInterval(function() {
    eddystoneBeacon.setBatteryVoltage(randomBatteryVoltage);
    eddystoneBeacon.setTemperature(randomTemperature);
}, intervalSec);

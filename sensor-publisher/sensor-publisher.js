var awsIot = require('aws-iot-device-sdk')
var device = awsIot.device({
  keyPath: '../security/PiThingJS.private.key',
  certPath:'../security/PiThingJS.cert.pem',
  caPath: '../security/root-CA.crt',
  host: 'a15oeeq6cx4a6v.iot.us-west-2.amazonaws.com',
  clientId: 'user-testing',
  region: 'us-west-2'
});

device
.on('connect', function() {
  console.log('connected to AWS IoT.');

  setInterval(function(){
    // random 10 - 35
    var data = {
      'temperature': Math.floor((Math.random() * 35) + 10)
    };
    device.publish('iot/sensor', JSON.stringify(data));
    console.log('sent: ', JSON.stringify(data));
  }, 3000);
});

console.log('Sensor publisher started.');

var awsIot = require('aws-iot-device-sdk')
var device = awsIot.device({
  keyPath: 'PiThingJS.private.key',
  certPath:'PiThingJS.cert.pem',
  caPath: 'root-CA.crt',
  host: 'a15oeeq6cx4a6v.iot.us-west-2.amazonaws.com',
  clientId: 'user',
  region: 'us-west-2'
});
device
  .on('connect', function(){
    console.log('connected');
    device.subscribe('sensorroom');
    device.publish('sensorroom', JSON.stringify({test_data: 1}))
  });
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  })

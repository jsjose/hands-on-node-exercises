console.log('UDP Client 4/8/2013 v0');

var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var message = new Buffer('this is a message');
// client.send(message, 0, message.length, 4000, 'localhost');

client.send(message, 0, message.length, 4000, '192.168.56.101', function(err, bytes) {
  if (err) {throw err; }
  client.close();
  console.log('close');
});

// client.close();
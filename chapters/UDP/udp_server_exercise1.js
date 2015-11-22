console.log('UDP Exercise 1 Server 30/9/2013 v0');

var dgram = require('dgram');
 
var server = dgram.createSocket('udp4');
server.on('message', function(message, rinfo) {
   console.log('server got message: ' + message + ' from ' + rinfo.address + ':' + rinfo.port);
});

server.on('listening', function() {
   var address = server.address();
   console.log('server listening on ' + address.address + ':' + address.port);
}); 
server.bind(4000);
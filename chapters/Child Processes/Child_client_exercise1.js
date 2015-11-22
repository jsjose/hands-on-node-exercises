console.log('Child Exercise 1 Client 3/9/2013 v0');

var net = require('net');
var conn = net.createConnection('/tmp');
conn.on('connect', function() {
  console.log('connected to unix socket server');
});
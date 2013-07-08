var http = require('http');
 
var server = http.createServer();

function connListener(stream) {
  console.log('Ah, we have our first user!');
  server.removeListener('connection', connListener);
};

server.on('connection', connListener);

server.removeAllListeners('connection');
var i=0;
var util = require('util');

require('http').createServer(function(req, res) {
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.removeHeader(200, {'Content-Type': 'text/plain'});
// res.end(req.method);
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Cache-Control': 'max-age=3600'
  });
//  res.end('Hello World!');
  res.end(util.inspect(req.headers));  
//  res.end(req.url);
  console.log(i);
  i++;
}).listen(4000);
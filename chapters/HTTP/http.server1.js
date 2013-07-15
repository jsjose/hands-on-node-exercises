var i=0;

require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  console.log(i);
  i++;
}).listen(4000);
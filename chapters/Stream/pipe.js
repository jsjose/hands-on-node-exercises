console.log('pipe 25/7/2013 v0');

// curl localhost:4000/clip
var called=0;

fs = require('fs');	

require('http').createServer(function(req, res) {
  var rs = fs.createReadStream('clip');
  rs.pipe(res);
}).listen(4000);
console.log('pipe2 25/7/2013 v0');

// curl localhost:4000/clip
var called=0;

fs = require('fs');	

require('http').createServer(function(req, res) {
  var rs = fs.createReadStream('clip');
   rs.pipe(res, {end: false});
   rs.on('end', function() {
     res.end("And that's all folks!");
   });
}).listen(4000);
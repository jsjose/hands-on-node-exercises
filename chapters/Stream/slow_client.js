console.log('Stream 25/7/2013 v0');

// curl localhost:4000/clip
var called=0;

fs = require('fs');

require('http').createServer(function(req, res) {

  var rs = fs.createReadStream('clip');

  rs.on('data', function(data) {
    res.write(data);
  });

  rs.on('end', function() {
    res.end();
  });
  console.log(called+' called')
  called++;
}).listen(4000);
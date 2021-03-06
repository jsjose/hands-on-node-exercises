console.log('HTTP Server Exercise 1 14/7/2013 v0');

var path = require('path'),
    fs   = require('fs');

require('http').createServer(function(req, res) {
  var file = path.normalize(req.url);
  console.log(file);
  fs.exists(file, function(exists) {
    if (exists) {
      fs.stat(file, function(err, stat) {
        var rs;
        
        if (err) { throw err; }
        
        if (stat.isDirectory()) {
          res.writeHead(403);
          res.end('Forbidden: is directory');
        } else {
          rs = fs.createReadStream(file);
          res.writeHead(200);
          rs.pipe(res);
        }
      });
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  })
}).listen(4000);
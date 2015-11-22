console.log('Stream 25/7/2013 v0');

// curl localhost:4000/clip
var called=0;

fs = require('fs');

 require('http').createServer(function(req, res) {
  var rs = fs.createReadStream('clip');
   rs.on('data', function(data) {
     if (!res.write(data)) {
     	console.log('pause');
       rs.pause();
     }
   });
   res.on('drain', function() {
   	  console.log('drain');
      rs.resume();
   });
   rs.on('end', function() {
      console.log('end');   	
      res.end();
   });
   console.log(called+' called')
  called++;  
}).listen(4000);
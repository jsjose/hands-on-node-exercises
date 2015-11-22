console.log('Ejercicio 3 http 21/7/2013 v0');
var 
  util = require('util');
  fs = require('fs');
  i = 0;

require('http').createServer(function(req, res) {
  var filename = i + '.tmp';
      ws = fs.createWriteStream(filename);

  console.log('Escribiendo '+filename);
 //console.log(util.inspect(req));

  req.pipe(ws);
  req.on('data', function(data){console.log('longitud '+data.length+' datos = '+data)});
  req.on('end', function(){res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Peticion '+i);});
  i++;
}).listen(4000);
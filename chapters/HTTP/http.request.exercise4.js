console.log('Ejercicio 4 http 24/7/2013 v0');

var http = require('http'),
    fs   = require('fs');

if (process.argv.length < 5) {
	// process.argv[0] invocador
	// process.argv[1] javascript
  console.log('Usage: <host> <port> <file_path>');
  return;
}

var options = {
  host: process.argv[2],
  port: parseInt(process.argv[3], 10),
  path: '/',
  method: 'PUT'
};


var req = http.request(options);
var rs = fs.createReadStream(process.argv[4]);

rs.pipe(req);
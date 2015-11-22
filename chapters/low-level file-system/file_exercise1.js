console.log('File Exercise 1 2/7/2013 v0');

var fs = require('fs');
var descriptor;

fs.stat('1.txt', function(err, stats) {
  if (err)  {console.log(err.message); return; }
  console.log('El tamaño del fichero es:', stats.size, 'B');
});
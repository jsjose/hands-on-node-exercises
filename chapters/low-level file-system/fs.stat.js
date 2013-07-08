var fs = require('fs');
var descriptor;

fs.stat('/etc/passwd', function(err, stats) {
  if (err)  {console.log(err.message); return; }
  console.log(stats);
  console.log('this file is ' + stats.size + ' bytes long.');
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isBlockDevice());
  console.log(stats.isCharacterDevice());
  console.log(stats.isSymbolicLink());
  console.log(stats.isFIFO());
  console.log(stats.isSocket());
  console.log(stats.dev);
  descriptor = stats.dev;
});

// fs.fstat(descriptor, function(err, stats) {
//  if (err)  {console.log(err.message); return; }
//  console.log(stats);
//  console.log('this file is ' + stats.size + ' bytes long.');
//});
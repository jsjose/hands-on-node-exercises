console.log('TCP Exercise 2 Chat Client 26/7/2013 v0');

if (process.argv.length < 3) {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <msg>');
  return;
}

var net = require('net');
var port = 4001;
var host = 'localhost';

var conn = net.createConnection(port, host);

conn.write(process.argv[2]);
conn.on('data', function(data){console.log(data.toString());});

process.stdin.on('data', function(data) {
   if (data.toString().trim().toLowerCase() === 'quit') {
      quitting = true; 
      console.log('quitting...'); 
      conn.end(); 
      process.stdin.pause();
   } else { conn.write(data);} 
});
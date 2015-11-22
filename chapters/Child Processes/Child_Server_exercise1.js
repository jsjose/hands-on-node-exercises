console.log('Child Exercise 1 Server 3/9/2013 v0');

var util = require('util');
var fs = require('fs');
var spawn = require('child_process').spawn;

require('net').createServer(function(socket) {
  socket.on('error', function(error) {
    console.log('error'+error);
  });

  fs.open('file.txt', 'r', function(err, fd) {
      socket.on('exit', function(err) {
        console.log('exit'+err);
        fs.close(fd, 'r', function() {console.log('error'+err);});
     });
   });

//  var child = spawn('node', ['Child_client_exercise1.js']);

 }).listen('/tmp/tmp2');
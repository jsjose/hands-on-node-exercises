var fs = require('fs');
fs.open('1.txt', 'r', function(err, fd) {
   if (err) { throw err }
   var readBuffer = new Buffer(1024),
     bufferOffset = 4,
     bufferLength = 5,
//     bufferLength = readBuffer.length,     
     filePosition = 10;
 
fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, 
    function(err, readBytes) {
    if (err) { throw err; }
       console.log('just read ' + readBytes + ' bytes');
    if (readBytes > 0) {
       console.log(readBuffer.slice(0, readBytes));
       }
    });
});
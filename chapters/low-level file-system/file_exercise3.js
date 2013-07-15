var fs = require('fs');

fs.open('1.txt', 'r', function(err, fd) {
   if (err) { throw err }
   var bufferOffset = 0,
     bufferLength = 20,
     readBuffer = new Buffer(bufferLength),
//     bufferLength = readBuffer.length,     
     filePosition = 5;

  for (i=0;i<1024;i++) {readBuffer[i]=0}
 
  fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, 
    function(err, readBytes) {
    if (err) { throw err; }
       console.log('just read ' + readBytes + ' bytes');
    if (readBytes > 0) {
       console.log(readBuffer.toString()); 
       }
    });

var readBuffer1 = new Buffer(bufferLength),
          
    filePosition = 15;

  fs.read(fd, readBuffer1, bufferOffset, bufferLength, filePosition, 
    function(err, readBytes) {
    if (err) { throw err; }
       console.log('just read ' + readBytes + ' bytes');
    if (readBytes > 0) { 
       console.log(readBuffer1.toString()); 
       }
    });
});
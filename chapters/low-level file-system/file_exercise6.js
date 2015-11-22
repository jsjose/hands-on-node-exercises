console.log('File Exercise 6 2/7/2013 v0');

var fs = require('fs');

fs.open('1.txt', 'a', function(err, fd) {
  var writeBuffer  = new Buffer('7'), // ya es UTF-8
      bufferOffset = 0,
      bufferLength = writeBuffer.length,
      filePosition = 10;

  fs.write(
    fd, 
    writeBuffer,
    bufferOffset,
    bufferLength,
    filePosition,
    function(err, written) {
      if (err) { throw err; }
      console.log('wrote ' + written + ' bytes');
    }
  );
});
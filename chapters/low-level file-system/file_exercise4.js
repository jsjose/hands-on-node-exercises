var fs = require('fs');

fs.open('1.txt', 'a', function(err, fd) {
  var writeBuffer  = new Buffer('abc'), // ya es UTF-8
      bufferOffset = 0,
      bufferLength = writeBuffer.length,
      filePosition = null;

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
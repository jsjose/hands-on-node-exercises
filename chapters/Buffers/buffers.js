var buf = new Buffer('Hello World!');
console.log("Buffer =", buf);

var buf = new Buffer('8b76fde713ce', 'base64');
console.log("Buffer (base64)=", buf);

var buf = new Buffer(1024);
console.log("Buffer (1024) =", buf);

buf[20] = 56; // set byte 20 to 56

console.log("Buffer [20] =", buf[20]);

var str = buf.toString();
console.log("string =", str);

var str = buf.toString('base64');
console.log("string (base64) =", str);
// slice
var buffer = new Buffer('this is the string in my buffer');
console.log(buffer);
var slice = buffer.slice(10, 20);
console.log(slice);
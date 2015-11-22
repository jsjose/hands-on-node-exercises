console.log('Buffer Exercise 1 27/6/2013 v0');

var buffer = new Buffer(100);
var i;

for (i=0; i<99; i++) {
	buffer[i] = i;
	console.log("buffer[", i, "] =", buffer[i]);
};

console.log(buffer);
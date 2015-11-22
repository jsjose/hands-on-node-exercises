console.log('Buffer Exercise 3 27/6/2013 v0');

var buffer = new Buffer(100);
var i;

for (i=0; i<99; i++) {
	buffer[i] = i;
//	console.log("buffer[", i, "] =", buffer[i]);
};

console.log(buffer);

var slice = buffer.slice(40, 60);

console.log(slice);

for (i=40; i<60; i++) {
	console.log("slice[", i-40, "] =", slice[i-40]);
};

var slice2 = new Buffer(20);

slice2 = slice;

console.log(slice2);

for (i=40; i<60; i++) {
	console.log("slice[", i-40, "] =", slice2[i-40]);
};
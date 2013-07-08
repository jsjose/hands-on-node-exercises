var a = {1: true, 2: false};
console.log('This is a number: %d, and this is a string: %s, and this is an\
object outputted as JSON: %j', 42, 'Hello', a);

console.warn("Warning!"); // imprime por stderr

console.trace();

var util = require('util'); 
util.log('Hello'); // 26 Jun 09:05:37 - Hello

console.log(util.inspect(a)); // => { '1': true, '2': false }

// util.inspect(a, showHidden, depth = 2, showColors);
util.inspect(a, showHidden=1, depth = 2, showColors=1);
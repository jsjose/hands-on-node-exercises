console.log('Emitter Exercise 1 29/6/2013 v0');

var EventEmitter = require('events').EventEmitter,
    util         = require('util'),
    sec          = new Date();

var Ticker = function(x){this.x = x;}

util.inherits(Ticker, EventEmitter);

Ticker.prototype.tick = function() {
	this.emit('tick', 'argumento');
//	this.on('tick', function() {setTimeout(function() {console.log("Hello World"); },1000);});
}

var myTicker = new Ticker(1);
var i=0;

myTicker.on('tick', function() {console.log("myTicker.on ", i);i++;setTimeout(function() {console.log("Hello World");myTicker.tick(); },1000);} );

//setTimeout(function() {console.log("Hello World");myTicker.tick(); },1000);

myTicker.tick();

//do {myTicker.tick();} while(1);
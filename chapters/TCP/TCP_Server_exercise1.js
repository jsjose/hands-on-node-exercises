console.log('TCP Exercise 1 Chat Server 26/7/2013 v0');

var util = require('util');
var connections = [];

require('net').createServer(function(connection) {

   connections.push(connection);
   connection.write('Hi');

   console.log ('New connection');

   connection.on('data', function(data) {
   	  var i = connections.indexOf(connection);
      console.log('Connection '+i+' '+data.toString());
      connections.forEach(function(connection){connection.write(data)});
   });
 
   connection.on('end', function(data) {
      var i = connections.indexOf(connection);
      console.log ('Connection '+i+' finished');
      if (i>=0) {connections.splice(i, 1);}
   });
 
 }).listen(4001);
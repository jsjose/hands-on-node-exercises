 var http = require('http');
 
 var options = {
   host: 'localhost',
   port: 4000,
   path: '/'
  // path: '/index.html'
 };
 
 http.get(options, function(res) {
   console.log('got response: ' + res.statusCode);
 }).on('error', function(err) {
   console.log('got error: ' + err.message)
 });
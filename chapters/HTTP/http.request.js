var options = {
  host: 'localhost',
  port: 4000,
  path: '/',
  method: 'POST'
};

var req = require('http').request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// write data to request body
req.write("data\n");
req.write("data\n");
req.end();
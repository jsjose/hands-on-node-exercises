console.log('Command Spawn Process Example 4/8/2013 v0');

var spawn = require('child_process').spawn;

var child = spawn('tail', ['-f', '/var/log/system.log']);

child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
  child.kill('SIGKILL');
});

child.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

child.on('exit', function(data){console.log('exit ', data);});
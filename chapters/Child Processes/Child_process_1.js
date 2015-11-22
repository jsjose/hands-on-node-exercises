console.log('Command Execution Example 4/8/2013 v0');

var exec = require('child_process').exec;

exec('cat *.js | wc -l', function(err, stdout, stderr) {
  if (err) {
    console.log('child process exited with error code ' + err.code);
    return;
  }
  console.log(stdout);
});
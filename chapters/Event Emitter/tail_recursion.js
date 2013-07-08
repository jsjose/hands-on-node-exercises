var interval = 1000; // 1 second

function async(f){f()}

(function schedule() {
  setTimeout(function() {
    async(function() {
      console.log('async is done!');
      schedule();
    });
  }, interval)
})();
(function () { // IIFE - Immeadiately Invoked Function Expression
  var work = function () { // Abstract thinking
    console.log('Working in a simple work...');
  };
  
  var hardWork = function () { // Abstract thinking
    console.log('Working in a hard work...');
  };
  
  var createWorker = function () { // Module
  
    var workCount = 0;
  
    var doWork = function (fn) { // Abstract thinking
      workCount += 1;
      console.log('Starting work');
      fn();
      console.log('Stoping work');
      console.log('Finish work', workCount);
    };
  
  
    return {
      job: doWork
    }
  };
  
  var worker = createWorker();
  
  worker.job(work);
  worker.job(hardWork);
}());

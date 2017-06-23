const fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

readerStream.on('data', function(data){
  var isReady = writerStream.write(data,'UTF8');

  if (!isReady){
    input.pause();

    output.once('drain', function(){
      input.resume();
    });
  }
});

console.log("Program Ended");

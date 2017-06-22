const fs = require("fs");

const readFile = function(fileName, callback) {
  fs.readFile(fileName, function (err, data) {
      if (err) return callback(err);

       return callback(data.toString());
  });
}

readFile('input.txt', function(err, content) {
    if (err) return console.error(err);

    console.log(content);
});

console.log("Program Ended");

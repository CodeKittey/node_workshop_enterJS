const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'test.txt');
const writeDirectory = path.join(__dirname, 'neuerDatei.txt');

console.log(fs.readdirSync('.'));

fs.stat(directory,function(err, stats) {
    console.log(stats);
});

fs.readFile(directory , 'utf8' ,function(err, content) {
    console.log(content);
});

const dataToWrite = "Awesome EnterJS";

fs.writeFile(writeDirectory, dataToWrite,'utf8', function(err){
  if(err) return console.log(err);
})

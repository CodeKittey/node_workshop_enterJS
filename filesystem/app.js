const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'test.txt');
const writeFile = path.join(__dirname, 'neuerDatei.txt');

console.log(fs.readdirSync('.'));

fs.stat(file,function(err, stats) {
    console.log(stats);
});

fs.readFile(file , 'utf8' ,function(err, content) {
    console.log(content);
});

const dataToWrite = "Awesome EnterJS";

fs.writeFile(writeFile, dataToWrite,'utf8', function(err){
  if(err) return console.log(err);
})

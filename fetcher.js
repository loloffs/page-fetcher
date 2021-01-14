const request = require('request');
const fs = require('fs');
const { exit, rawListeners } = require('process');
const { R_OK } = require('constants');
const rl = require('readline');

const inputTings = process.argv.slice(2);

request.get({url: inputTings[0]}, function (error, response, body) {

  let writeStream = fs.createWriteStream(inputTings[1]);

  writeStream.write(body, () => {
    let fileStat = fs.statSync(inputTings[1]);
    let fileSizeInBytes = fileStat.size;
    
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${inputTings[1]}`);  
  });
});


//stretch

  // if(fs.exists(body, () => {
    //   rl.setPrompt("File already exists. Please press Y then *enter* to overwrite.");
    // }));

    // rl.setPrompt("File already exists. Please press Y then *enter* to overwrite.") 
    // fs.exists(body, (exists) => {
    //   console.log(exists ? rl.getPrompt() : rl.getPrompt());
    // });
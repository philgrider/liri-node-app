var fs = require('fs');
var CheckUserRequest = require('./Check_User_Input');
var inputData = [];

function randomRequest(movie) { 
    //Read File Content and do an action
    fs.readFile("Random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
        inputData = data.split(',');
        // console.log(inputData[0]);
        CheckUserRequest.checkUserInput(inputData[0],inputData[1].substr(1).slice(0, -1));
    });
    
};
    

exports.randomRequest = randomRequest;
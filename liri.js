var CheckUserRequest = require('./Check_User_Input');

var typeRequest = process.argv[2];
var requestContent = process.argv[3];
// parse user input // 
CheckUserRequest.checkUserInput(typeRequest, requestContent);

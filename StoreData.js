var fs = require('fs');

function storeData(saveData){
    fs.appendFile("log.txt", saveData, function(err) {

        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
       // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Content Added!");
        }
      
      });
}
exports.StoreData = storeData;
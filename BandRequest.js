var request = require('request');
var moment = require('moment');
var StoreData = require('./StoreData');

function bandRequest(artist){
    if(typeof artist === 'string'){
        request('https://rest.bandsintown.com/artists/' + artist + 
        '/events?app_id=codingbootcamp', function(error, response, body) {
        var artistEvent = JSON.parse(body);
        // capitalize first Letter//
        var artisitCapital = capitalize(artist);
        // If there were no errors 
        if (!error && response.statusCode === 200) {
            //save data to variable saveData//
            var saveData = '--------------------------\n' + artisitCapital + ' is playing next at:' + '\nVenue: ' + artistEvent[0].venue.name + 
            '\nVenue Location: ' + artistEvent[0].venue.city + ', ' + artistEvent[0].venue.region +
            '\nDate: ' + moment(artistEvent[0].datetime).format( "MM/DD/YY") + '\n--------------------------';
            
            // Then we print out the band info
            console.log(saveData);
            //store data to log.txt//
            StoreData.StoreData(saveData);
        }
        });
    }else{
    console.log('You must enter an artist...');
    };
    };   
function capitalize(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
exports.bandRequest = bandRequest;
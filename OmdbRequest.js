var dotenv = require('dotenv').config();
var env = process.env;
var fs = require('fs');
var omdbApi = require('omdb-client');
var Keys = require('./keys.js');
var StoreData = require('./StoreData');

function omdbRequest(movie) { 
    //check to see if there is input
    if(typeof movie === 'string'){
        omdbApi.get({ apiKey: process.env.OMDB_KEY, title: movie }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //Get the rotten tomatoes value//
            var rottenTomatoes = getRottenTomatoesRatingValue (data);

            //Log out Info
            var saveData = '----------------' + '\nTitle: ' + data.Title + '\nYear: ' + data.Year +
            '\nIMDB Rating: ' + data.imdbRating + '\nRotten Tomatoes Rating: ' + rottenTomatoes +
            '\nCountry of Production: ' + data.Country + '\nLanguage: ' + data.Language + '\nPlot: ' +
            data.Plot + '\nActors: ' + data.Actors + '\n----------------';
            //log out results
            console.log(saveData);
            //store data in txt file//
            StoreData.StoreData(saveData);
        });        
    }else{// if input is blank find Mr Nobody
        omdbApi.get({ apiKey: process.env.OMDB_KEY, title: "Mr. Nobody" }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var rottenTomatoes = getRottenTomatoesRatingValue (data);
            // save data to variable//
               var saveData = '----------------' + '\nTitle: ' + data.Title + '\nYear: ' + data.Year +
               '\nIMDB Rating: ' + data.imdbRating + '\nRotten Tomatoes Rating: ' + rottenTomatoes +
               '\nCountry of Production: ' + data.Country + '\nLanguage: ' + data.Language + '\nPlot: ' +
               data.Plot + '\nActors: ' + data.Actors + '\n----------------';
               //log data to window//
               console.log(saveData);
                //store data in txt file//
                StoreData.StoreData(saveData);
           });  
        
        }

    }
    // find Rotten Tomatoes//
    function getRottenTomatoesRatingObject (data) {
        return data.Ratings.find(function (item) {
           return item.Source === "Rotten Tomatoes";
        });
    }
    function getRottenTomatoesRatingValue (data) {
        return getRottenTomatoesRatingObject(data).Value;
    }

exports.omdbRequest = omdbRequest;
var dotenv = require('dotenv').config();
var env = process.env;
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var StoreData = require('./StoreData');
var spotify = new Spotify(keys.spotify);


function spotifyRequest(song) { 

    if(typeof song === 'string'){
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //    console.log(data);
            var saveData = '----------------\n' + 'Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Name: ' + data.tracks.items[0].name +
                '\nLink: ' + data.tracks.items[0].external_urls.spotify + '\nAlbum: ' + data.tracks.items[0].album.name+
                '\n----------------' ;
            console.log(saveData);    
            StoreData.StoreData(saveData);
        });        
    }else{
        spotify.search({ type: 'track', query: 'The Sign Ace of Base' }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //    console.log(data);
            var saveData = '----------------\n' + 'Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Name: ' + data.tracks.items[0].name +
                '\nLink: ' + data.tracks.items[0].external_urls.spotify + '\nAlbum: ' + data.tracks.items[0].album.name+
                '\n----------------' ;
            console.log(saveData); 
            StoreData.StoreData(saveData);

        }); 
    }

}

exports.spotifyRequest = spotifyRequest;
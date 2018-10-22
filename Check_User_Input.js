var BandRequest = require('./BandRequest');
var SpotifyRequest = require('./SpotifyRequest');
var OmdbRequest = require('./OmdbRequest');
var RandomRequest = require('./RandomRequest');

function checkUserInput(typeRequest, requestContent){
    switch(typeRequest){

        case 'concert-this':
        BandRequest.bandRequest(requestContent);
        break;
    
        case 'spotify-this-song':
        SpotifyRequest.spotifyRequest(requestContent);
        break;
    
        case 'movie-this':
        OmdbRequest.omdbRequest(requestContent);
        break;
    
        case 'do-what-it-says':
        RandomRequest.randomRequest();
        break;
    }
}
exports.checkUserInput = checkUserInput;
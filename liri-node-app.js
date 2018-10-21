var dotenv = require('dotenv');
var request = require('request');
var inquire = require('inquire');
var env = process.env;
function main() { 
    dotenv.config();
    var spotifyAPIKey = env.SPOTIFY_API_KEY;
 };
 main();
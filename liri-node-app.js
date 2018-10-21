var dotenv = require('dotenv');
var request = require('request');
var inquire = require('inquire');
var http = require('http');
var env = process.env;
function main() { 
    dotenv.config();
    var spotifyAPIKey = env.SPOTIFY_API_KEY;
 };
 main();
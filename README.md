# liri-node-app

1. Use the following command to search for when an Artist next Concert.
    `node liri.js concert-this <artist/band name here>`
2. Use the following command to search spotify for a particular song.
    `node liri.js spotify-this-song '<song name here>'`
    See what happens if you use the following input
    `node liri.js spotify-this-song`
3. Use the following command to search OMDB for a particular movie
    `node liri.js movie-this '<movie name here>'`
    See what happens if you use the following input
    `node liri.js movie-this`
4. Use the following command to read the information in the random.txt file and perform the search functions containted in the .txt.
    `node liri.js do-what-it-says`

5. You will need to create a .env and place your own spotify API keys inside. The following is the proper format.

            # API keys

            SPOTIFY_SECRET = SPOTIFY_SECRET
            SPOTIFY_ID = SPOTIFY_ID

            OMDB_KEY = OMDB_KEY

All request data will be appended to the log.txt file for future reference.


https://github.com/philgrider/liri-node-app

##You will find a video showing the functioning app in the video folder.
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var searchQuery = process.argv[3];

switch(userCommand){
  case "concert-this":
    concertThis(searchQuery);
    break;
  case "spotify-this-song":
    spotifySong(searchQuery);
    break;
  case "movie-this":
    movieThis(searchQuery);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log("Pick a option");


}
function concertThis(artist){
 axios.get(`https://rest.bandsintown.com/artists/${artist}events?app_id=codingbootcamp`).then(
  function(response) {
    // Then we print out the imdbRating
    console.log(response);
  }
);
}


function spotifySong(songName){
  spotify.search(
    {
      type: "track",
      query: songName
    }, 
    function(err,data){
      if (err) throw err;

      for(var i = 0; i < data.tracks.items.length; i++)
        console.log(data.tracks.items[i].name)
      }
  )
}

//spotifySong("Help")

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

// // Store all of the arguments in an array
// var nodeArgs = process.argv;

// // Create an empty variable for holding the artist name
// var artist = "";

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {
//     artist = artist + "+" + nodeArgs[i];
//   } else {
//     artist += nodeArgs[i];
//   }};

//   var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// axios.get(queryUrl).then(
//   function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log("---------------Data---------------");
//       console.log(error.response.data);
//       console.log("---------------Status---------------");
//       console.log(error.response.status);
//       console.log("---------------Status---------------");
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//       console.log(error.config);
//   });
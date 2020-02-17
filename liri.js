require("dotenv").config();

var fs = require("fs");
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
// function concertThis(artist){
//  axios.get("https://rest.bandsintown.com/artists/" + artist + "events?app_id=codingbootcamp").then(
//   function(response) {
   
//     console.log(response);
//   })

// }


// function spotifySong(songName){
//   spotify.search(
//     {
//       type: "track",
//       query: songName
//     }, 
//     function(err,data){
//       if (err) throw err;

//       for(var i = 0; i < data.tracks.items.length; i++)
//         console.log(data.tracks.items[i].name)
//       }
//   )
// }

function movieThis(movieName){
   axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(function (response) {

      console.log(response);
    
   });
 }
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie


// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
      //  It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
      //  Edit the text in random.txt to test out the feature for movie-this and concert-this.

// fs.readFile("random.txt", "utf8", function(error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//       return console.log(error);
//     }

//     var dataArr = data.split(", ");

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);
  
// });


// function doWhatItSays() {
  
//   fs.appendFile("random.txt", ", " , movieName, artist, function(err) {
//     if (err) {
//       return console.log(err);
//     }
  

//     else {
//     console.log("Content Added!");
//   }
//   });

// }

 
  
  
      


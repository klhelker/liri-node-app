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
function concertThis(artist){
 axios.get("https://rest.bandsintown.com/artists/" + artist + "events?app_id=codingbootcamp").then(
  function(response) {
   
    console.log(response);
  })

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


function movieThis(movieName){
  axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(function (response) {


   
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Country: " + response.data.Country);
    console.log("Imdb Ratings: " + response.data.imdbRating);
    
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Language: " + response.data.Language);
    console.log("Actors: " + response.data.Actors);
    console.log("Plot: " + response.data.Plot)
  })
  .catch(function(error) {
    if (error.response) {
      
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
      console.log(error.config);

  });
}

// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
      //  It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//       //  Edit the text in random.txt to test out the feature for movie-this and concert-this.

fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(", ");

    // We will then re-display the content as an array for later use.
    console.log(dataArr);
  
});


function doWhatItSays() {
  
  fs.appendFile("random.txt", ", " , movieName, artist, function(err) {
    if (err) {
      return console.log(err);
    }
  

    else {
    console.log("Content Added!");
  }
  })
}
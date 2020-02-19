require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];

var nodeArgs = process.argv;

var searchQuery = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    searchQuery = searchQuery + "+" + nodeArgs[i];
  } else {
    searchQuery += nodeArgs[i];
  }
}

function Liri() {
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
};
Liri()

function concertThis(artist){
 axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    // Name of the venue

    // * Venue location
    for (var i = 0; i < nodeArgs.length; i++){
    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
    //Name of Venue
    console.log("Venue: " + response.data[i].venue.name);
    //Venue Location
    console.log("Venue Location: " + response.data[i].city);
    //Date of Event 
    console.log("Date of Event: " + response.data.Country);
    }
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



function spotifySong(){
  var songName = searchQuery
  if (searchQuery === ""){

  songName = "The Sign"
  limit = 1 }

  spotify.search(
    {
      type: "track",
      query: songName
      // limit: 1
    }, 
    function(err,data){
      if (err) throw err;
      
      for(var i = 0; i < data.tracks.items.length; i++){
        
        console.log("Track: " + data.tracks.items[i].name)
        console.log("Album: " +data.tracks.items[i].album.name)
        console.log("Artist: " + data.tracks.items[i].album.artists[0].name)
        console.log("Preview Url: " + data.tracks.items[i].preview_url)
        console.log("\n")
      }
      }
  )
}
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from

function movieThis(movieName){
  axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(function (response) {

    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Country: " + response.data.Country);
    console.log("Imdb Ratings: " + response.data.imdbRating);
    console.log(response.data);
    console.log("Rotten Tomatoes: " + response.data.Ratings[response.data.Ratings.findIndex(index=>index.Source === "Rotten Tomatoes")].Value);
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

function doWhatItSays() {
  
  fs.readFile("random.txt", "utf8", function(error, data){
    
    if (error) {
      return console.log(error);
    }
  
    console.log(data);
    
    var dataArr = data.split(", ");
    
    console.log(dataArr);
  
    if (dataArr.length === 2)
    
    {
        userCommand = dataArr[0];
        searchQuery = dataArr[1];
        Liri();
    
    }

    else {

      console.log ("check formatting: command, search term")
    }

         })
  }

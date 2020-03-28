 
## LIRI APP                                                                       
### Author:  Kristin Helker

 

 LIRI is like iPhone's SIRI. Unlike Siri, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line app that will take in user commands and give the user back an answer.  The commands necessary to run Liri are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`




To operate Liri open file in the terminal and in the command line write the following options:
   * node liri.js concert-this '< artist/band name here >`
   
        * This will search the Bands in Town Artist Events API 
         (`"https://rest.bandsintown.com/artists/" + artist + "/events?
          app_id=codingbootcamp"`) for an artist and render the following 
          information about each event to the terminal:

             * Name of the venue
             * Venue location
             * Date of the Event
   
   
   
   
  * node liri.js spotify-this-song '< song name here >'
    
            * This will output the following information to you terminal/bash
              window:

                * Artist(s)
                * The song's name
                * A preview link of the song from Spotify
                * The album that the song is from
                * If no song is provided then your program will default to 
                  "The Sign" by Ace of Base.
   
   
  * node liri.js movie-this '< movie name here>'
  
            * This will output the following information to your terminal/bash 
              window:
     
            * Title of the movie.
            * Year the movie came out.
            * IMDB Rating of the movie.
            * Rotten Tomatoes Rating of the movie.
            * Country where the movie was produced.
            * Language of the movie.
            * Plot of the movie.
            * Actors in the movie.


  * node liri.js '< do-what-it-says >'

    
        * Using the `fs` Node package
         

### For a live video example go to:
 
https://drive.google.com/file/d/1Tb8Qz0ydMOVaabZdMROXCasHnNOlpXFC/view  random.txt and then use it to call one of LIRI's commands.

#Technologies Used

    - Node.js
    - fs
    - BandsinTown API
    - Spotify API
    - OMDB API
    
### Click on link below to access deployed version   
[GitHub]( http://kristinhelker.com/liri-node-app/.) 




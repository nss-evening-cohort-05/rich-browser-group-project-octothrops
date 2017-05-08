var FbAPI = ((domStuff) => {

	  	domStuff.writeSearchedMovieToDom = (apiKeys, uid, movie) => {
            // This function runs when the button is clicked.  Results are passed in to writeSearchedMovieToDom
        	// FbAPI.getMovie(apiKeys).then((results) => { 
          	// Not needed.  movie.key is pulling the correct info below. 
            // let searchedMovie = results;
        
            let actorArray = movie.Actors.split(",");
            
            console.log(actorArray);
            let searchedMovieString = "";

        	// only returns one object.  No need to loop.
            //searchedMovie.forEach((movie) => {

            searchedMovieString += `<div class="col-md-4">`;
            searchedMovieString += `<div class="panel panel-default">`;
            searchedMovieString += `<div class="panel-heading">`;
            searchedMovieString += `<h3 class="panel-title">${movie.Title}</h3>`;
            searchedMovieString += `</div>`;
            searchedMovieString += `<div class="panel-body">`;

            searchedMovieString += `<h5><span class="movieSpan">Release Date: </span>${movie.Year}</h5>`;
            searchedMovieString += `<h5><span class="movieSpan">Genre: </span>${movie.Genre}</h5>`;
            
            searchedMovieString += `<h5><span class="movieSpan starring">Starring: </span>`;
            searchedMovieString += `<span="actorList">${actorArray[0]}`;
            for (var i = 1; i < actorArray.length; i++) {    
                searchedMovieString += `, ${actorArray[i]}`;
            }
            searchedMovieString += `</span></br>`;

            searchedMovieString += `<p class="movieDesc">${movie.Plot}</p>`; 

// watched movie?
            searchedMovieString += `<div class="form-check">`;
            searchedMovieString += `<label class="form-check-label">`;
            searchedMovieString += `<input class="form-check-input watchedFlag" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"> Want to see it!</label>`;
            searchedMovieString += `</div>`;

            searchedMovieString += `<div class="form-check">`;
            searchedMovieString += `<label class="form-check-label">`;


let thisUser = (FbAPI.getUser(apiKeys, uid)); 
let watchedMovie = thisUser.watchedMovie; // getWatched()
// GET from firebase record, if user has watched movie
// POST to firebase record if user posts a change here
// watchedMovie = true;
console.log("watchedMovie :: ", watchedMovie);
            if (watchedMovie) {
                searchedMovieString += `<input class="form-check-input watchedFlag" type="radio" name="exampleRadios" id="watchedFlag1" value="option0" checked> Seen it!</label>`;
            } else {
                searchedMovieString += `<input class="form-check-input watchedFlag" type="radio" name="exampleRadios" id="watchedFlag2" value="option1"> Seen it!</label>`;
            }
            searchedMovieString += `</div>`;
// if <watched>
// GET from firebase record the rating, and check that button
// POST to firebase any changes made here
            // user Rating
// these buttons should be enabled only if <movie.watchedMovie> = true
// otherwise, disabled
            if (watchedMovie) {
                searchedMovieString += `<h5><span class="movieSpan">Rating: </span>`;
            }
            searchedMovieString += `<div id="ratingsFlag" class="form-check">`;
            searchedMovieString += `<label class="form-check-label">`;
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="ratingsFlag0" value="option0"> 1</label>`;
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="ratingsFlag1" value="option1"> 2</label>`;
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="ratingsFlag2" value="option2"> 3</label>`;
            searchedMovieString += `<input class="form-check-input " type="radio" name="exampleRadios" id="ratingsFlag3" value="option3"> 4</label>`;
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="ratingsFlag4" value="option4"> 5</label>`;
            searchedMovieString += `</div>`;
            
            searchedMovieString += `</div></div></div>`;
        
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="watched-movie-btn" value="option2">Seen it!</label>`;
            searchedMovieString += `</div>`;
            searchedMovieString += `<div class="dropdown">`;
            searchedMovieString += `<button class="btn btn-secondary dropdown-toggle disabled" type="button" id="rating" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Rate It!</button>`;
            searchedMovieString += `<div class="dropdown-menu" aria-labelledby="dropdownMenu2">`;
            searchedMovieString += `<button class="dropdown-item" type="button">1</button>`;
            searchedMovieString += `<button class="dropdown-item" type="button">2</button>`;
            searchedMovieString += `<button class="dropdown-item" type="button">3</button>`;
            searchedMovieString += `<button class="dropdown-item" type="button">4</button>`;
            searchedMovieString += `<button class="dropdown-item" type="button">5</button>`;


            searchedMovieString += `</div></div></div></div></div>`;

    	//});

    	$(".searched-movie-container").html(searchedMovieString);

		// Not needed without the call to getMovie()
        // }).catch((error) => {
	    //  console.log("writeToDom error", error);
	    //});
	};

  return domStuff;
})(FbAPI || {});

//    1. Movie name
//    1. Year released
//    1. An array of major actors
//    1. An integer rating of 1-5
//    1. A boolean value that, if true, means that you have watched the movie
// 1. Your user should be able to mark if they have seen the movie
// 1. Your user should be able to mark a rating for the movie if they have seen it


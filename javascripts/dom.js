var FbAPI = ((domStuff) => {

	  	domStuff.writeSearchedMovieToDom = (movie) => {
            // This function runs when the button is clicked.  Results are passed in to writeSearchedMovieToDom
        	// FbAPI.getMovie(apiKeys).then((results) => { 
          	// Not needed.  movie.key is pulling the correct info below. 
            // let searchedMovie = results;
        	let searchedMovieString = "";

        	// only returns one object.  No need to loop.
            //searchedMovie.forEach((movie) => {

            searchedMovieString += `<div class="col-md-4">`;
            searchedMovieString += `<div class="panel panel-default">`;
            searchedMovieString += `<div class="panel-heading">`;
            searchedMovieString += `<h3 class="panel-title">${movie.Title}</h3>`;
            searchedMovieString += `</div>`;
            searchedMovieString += `<div class="panel-body">`;
            searchedMovieString += `<h5>${movie.Genre}</h5>`;
            searchedMovieString += `<p>${movie.Plot}</p>`; 
            searchedMovieString += `<h5>${movie.Year}</h5>`;
            searchedMovieString += `<div class="form-check">`;
            searchedMovieString += `<label class="form-check-label">`;
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">Want to see it!</label>`;
            searchedMovieString += `</div>`;
            searchedMovieString += `<div class="form-check">`;
            searchedMovieString += `<label class="form-check-label">`;
            searchedMovieString += `<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">Seen it!</label>`;
            searchedMovieString += `</div>`;
            searchedMovieString += `</div></div></div>`;

    	//});

    	$(".searched-movie-container").html(searchedMovieString);

		// Not needed without the call to getMovie()
        // }).catch((error) => {
	    //  console.log("writeToDom error", error);
	    //});
	};

  return domStuff;
})(FbAPI || {});


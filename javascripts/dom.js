var FbAPI = ((domStuff) => {

	  	domStuff.writeSearchedMovieToDom = (apiKeys) => {
    	FbAPI.getMovie(apiKeys).then((results) => {
      	let searchedMovie = results;
    	let searchedMovieString = "";

    	searchedMovie.forEach((movie) => {

            searchedMovieString += `<div class="col-md-4">`;
            searchedMovieString += `<div class="panel panel-default">`;
            searchedMovieString += `<div class="panel-heading">`;
            searchedMovieString += `<h3 class="panel-title">${movie.Title}</h3>`;
            searchedMovieString += `</div>`;
            searchedMovieString += `<div class="panel-body">`;
            searchedMovieString += `<h5>${movie.Genre}</h5>`;
            searchedMovieString += `<p>${movie.Plot}</p>`; 
            searchedMovieString += `<h5>${movie.Year}</h5>`;
            searchedMovieString += `</div></div></div>`;

    	});

    	$(".searched-movie-container").html(searchedMovieString);

		}).catch((error) => {
	      console.log("writeToDom error", error);
	    });
	};

  return domStuff;
})(FbAPI || {});

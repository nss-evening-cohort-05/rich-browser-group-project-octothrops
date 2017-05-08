var FbAPI = ((domStuff) => {

	  	domStuff.writeSearchedMovieToDom = (movie) => {
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
            searchedMovieString += `<h5>${movie.Year}</h5>`;
            searchedMovieString += `<h5>${movie.Genre}</h5>`;
            searchedMovieString += `<table>`;
            searchedMovieString += `<tr>`;
            for (var i = 0; i < actorArray.length; i++) {      
                searchedMovieString += `<td>`;
                searchedMovieString += `<ul>`;
                searchedMovieString += `<h5><li>${actorArray[i]}</li></h5>`;
                searchedMovieString += `</ul>`;
                
                searchedMovieString += `</td>`;
                if ((i + 1) % 3 === 0) {
                searchedMovieString += `</tr>`;
                searchedMovieString += `<tr>`;
                }
            }
            searchedMovieString += `</tr>`;
            searchedMovieString += `</ul>`;
            searchedMovieString += `</table>`;
            searchedMovieString += `<p>${movie.Plot}</p>`; 
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

//    1. Movie name
//    1. Year released
//    1. An array of major actors
//    1. An integer rating of 1-5
//    1. A boolean value that, if true, means that you have watched the movie
// 1. Your user should be able to mark if they have seen the movie
// 1. Your user should be able to mark a rating for the movie if they have seen it


var FbAPI = (function (movieCall) {

	movieCall.getMovie = function (searchValue) {
		let movies = [];
		return new Promise((resolve, reject) => {
			let uid = FbAPI.credentialsCurrentUser().uid;
			$.ajax({
				method:"GET",
				url:`http://www.omdbapi.com/?t=${searchValue}&y=&plot=short&r=json`
			}).done((data) => {
				let response = data;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					movies.push(response[key]);
				});
				resolve(movies);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	return movieCall;
})(FbAPI || {});
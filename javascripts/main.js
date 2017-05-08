$(document).ready(function() {

let apiKeys; // firebase credentials

let loggedIn = false;

FbAPI.firebaseCredentials().then((keys) => {
	apiKeys = keys;
	// gets the apiKeys.json object
	// hat has the firebase API key et al
	
	firebase.initializeApp(apiKeys);

	// FbAPI.writeCurrent(apiKeys);
	}).catch((error) => {
		console.log("key errors", error);
});



  $('#getMovie').click((event) => {
    let movieTitle = $('#movieSearch').val();

    FbAPI.getMovie(movieTitle).then((results) =>{
      	console.log("Movie API results:", results);
      	let thisUser = FbAPI.credentialsCurrentUser();
		FbAPI.writeSearchedMovieToDom(apiKeys, thisUser.uid, results);
    }).catch((error) => {
      console.log("getMovie Error", error);
    });
  });


  // there's a <Watched> set of radio buttons on the Movie Cards ...
  // need to decide whether to keep those (or modify those)
  // or the version you added
  // and delete the other
  // When I pushed up my code and resolved the merge conflict, 
  // I left both versions out there
  $('.searched-movie-container').on('click', '#watched-movie-btn', () => {
  	console.log("watched!");
  	$('#rating').toggleClass('disabled');
  }); 


  // there are radio buttons on the Movie Cards showing Rating ... 
  // need to decide whether to keep the radio buttons
  // or the dropdown
  // and delete the other
  $('.searched-movie-container').on('click', '.dropdown-item', (e) => {
  	let userRating = e.target.innerHTML;
  	$('#rating').html('My Rating ' + userRating);
  });



$("#find-movies-link").click(() => {

});



//***********************************************************
// event handlers and functions for 
// USER REGISTRATION
// USER LOG IN
// USER LOG OFF
//***********************************************************
$('#register-button').click(() => {

	let email = $('#input-email').val();
	let password = $('#input-password').val();
	// let username = $('#input-username').val();

	let user = {email, password}; 

	FbAPI.registerUser(user).then((response) => {

		let newUser = {
			uid: response.uid
		};

		FbAPI.addUser(apiKeys, newUser).then((response) => {
			clearLogin();
			$('#login-container').addClass('hide');
			$("#login-logout-link").removeClass('active');
			$(".search-container").removeClass("hide");
			$("#find-movies-link").addClass('active');
			// firebase.createLogoutButton(apiKeys);

			loggedIn = true;

		}).catch((error) => {
			console.log("error in addUser", error);
		});
	}).catch((error) => {
		console.log("error in registerUser", error);
	});
});


$('#login-button').click(() => {

	let email = $('#input-email').val();
	let password = $('#input-password').val();

	let user = {email, password};

	FbAPI.loginUser(user).then((response) => {
		clearLogin();
		$('#login-container').addClass('hide');
		$(".search-container").removeClass("hide");
		$("#login-logout-link").removeClass('active');
		$("#find-movies-link").addClass('active');

		loggedIn = true;

	}).catch((error) => {
		console.log("error in loginUser", error);
	});
});


// function clears the login user input fields
let clearLogin = () => {
	$('#input-email').val("");
	$('#input-password').val("");
};


// event handler for <Login-Register-Logout> link
$('#login-logout-link').click(() => {

	if (!loggedIn) {
		// then user is registering and/or logging in
		let email = $('#input-email').val();
		let password = $('#input-password').val();

		let user = {email, password};

// let authUser = firebase.auth().user;
// console.log("authUser :: ", authUser);
// if (user === null) {
// 	console.log("user = null // Register user");
// }
// alternate attempt
// let thisUser = FbAPI.credentialsCurrentUser();
// console.log("thisUser :: ", thisUser);
// FbAPI.logoutUser(thisUser.email, thisUser.uid);	

		FbAPI.loginUser(user).then((response) => {
			clearLogin();
			$('#login-container').addClass('hide');
			
			$(".search-container").removeClass("hide");
			$("#find-movies-link").addClass('active');
			// $("#search-movies-link").addClass('active');

			loggedIn = true;

		}).catch((error) => {
			console.log("error in loginUser", error);
		});


	} else { // user is logging off
		clearLogin();
		let thisUser = FbAPI.credentialsCurrentUser();
		FbAPI.logoutUser(thisUser.email, thisUser.uid);	
		$(".search-container").addClass("hide");
		$("#find-movies-link").removeClass('active');
		$("#search-movies-link").removeClass('active');
		$("#login-logout-link").addClass('active');
		$('#login-container').removeClass('hide');
		loggedIn = false;
	} // <else>
});



});

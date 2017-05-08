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
    movieAPI.getMovie(movieTitle).then((results) =>{
      console.log("Movie API results:", results);
    }).catch((error) => {
      console.log("getMovie Error", error);
    });
  });



$("#find-movies-link").click(() => {

});



// I don't think you need any of this here ... 
// The clearLogin() is being done in the User Logon functions
// This link becomes active when the user logs in;
// The login-container has already been hidden upon login
// ALL these classes are being set either to /hide/ or /active/ 
//   on <log on> and <log off> ; doesn't need to happen here
//
// You already have the user's id bc they're logged in
// let thisUser = FbAPI.credentialsCurrentUser();
// let thisUserID = thisUser.uid;
$("#search-movies-link").click(() => {

	// don't need these...
	// let email = $('#input-email').val();
	// let password = $('#input-password').val();
	// firebase.loginUser(user).then((response) => {
		// clearLogin();
		// $("#login-container").addClass('hide');
		// $("#login-logout-link").removeClass('active');

		// $('main-container').removeClass('hide');
		
		// $(".search-container").removeClass("hide");
		// $("#search-movies-link").addClass('active');
		// firebase.createLogoutButton(apiKeys);

	// }).catch((error) => {
	// 	console.log("error in loginUser", error);
	// });
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
// console.log("register response", response);
		let newUser = {
			uid: response.uid
		};
// console.log("newUser :: ", newUser);
		FbAPI.addUser(apiKeys, newUser).then((response) => {
			clearLogin();
			$('#login-container').addClass('hide');

			$(".search-container").removeClass("hide");
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
		$("#find-movies-link").addClass('active');
		$("#search-movies-link").addClass('active');

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
// (console.log("logging out // loggedIn :: ", loggedIn));
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
// let thisUser = FbAPI.credentialsCurrentUser();
// console.log("thisUser :: ", thisUser);
// FbAPI.logoutUser(thisUser.email, thisUser.uid);	

		FbAPI.loginUser(user).then((response) => {
			clearLogin();
			$('#login-container').addClass('hide');
			
			$(".search-container").removeClass("hide");
			$("#find-movies-link").addClass('active');
			$("#search-movies-link").addClass('active');

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
		$('#login-container').removeClass('hide');
		loggedIn = false;
	} // <else>
});



});

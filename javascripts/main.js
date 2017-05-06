$(document).ready(function() {

let apiKeys; // firebase credentials

firebase.firebaseCredentials().then((keys) => {
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



// id in navbar :: .search-container

$('register-button').click(() => {

	let email = $('#input-email').val();
	let password = $('#input-password').val();
	// let username = $('#input-username').val();

	let user = {email, password}; 

	firebase.registerUser(user).then((response) => {
		console.log("register response", response);
		let newUser = {
			uid: response.uid
		};

		firebase.addUser(apiKeys, newUser).then((response) => {
			// clearLogin();
			$('#login-container').addClass('hide');
			// $('main-container').removeClass('hide');

			$(".search-container").removeClass("hide");
			// firebase.createLogoutButton(apiKeys);

		}).catch((error) => {
			console.log("error in addUser", error);
		});
	}).catch((error) => {
		console.log("error in registerUser", error);
	});
});

$("#login-logout-link").click(() => {
	let email = $('#input-email').val();
	let password = $('#input-password').val();
	// firebase.loginUser(user).then((response) => {
		clearLogin();
		$(".search-container").addClass('hide');
		$("#search-movies-link").removeClass('active');
		$("#login-container").removeClass("hide");
		$("#login-logout-link").addClass('active');

		// $('main-container').removeClass('hide');
		
		// firebase.createLogoutButton(apiKeys);

	// }).catch((error) => {
	// 	console.log("error in loginUser", error);
	// });
});



$("#search-movies-link").click(() => {
	let email = $('#input-email').val();
	let password = $('#input-password').val();
	// firebase.loginUser(user).then((response) => {
		clearLogin();
		$("#login-container").addClass('hide');
		$("#login-logout-link").removeClass('active');

		// $('main-container').removeClass('hide');
		
		$(".search-container").removeClass("hide");
		$("#search-movies-link").addClass('active');
		// firebase.createLogoutButton(apiKeys);

	// }).catch((error) => {
	// 	console.log("error in loginUser", error);
	// });
});

$('#login-button').click(() => {

	let email = $('#input-email').val();
	let password = $('#input-password').val();
	// let username = $('#input-username').val();

	let user = {email, password};

	firebase.loginUser(user).then((response) => {
		clearLogin();
		$('#login-container').addClass('hide');
		// $('main-container').removeClass('hide');
		
		$(".search-container").removeClass("hide");
		// firebase.createLogoutButton(apiKeys);

	}).catch((error) => {
		console.log("error in loginUser", error);
	});
});


// function clears the login user input fields
let clearLogin = () => {
	$('#input-email').val("");
	$('#input-password').val("");
	// $('#input-username').val("");
};

});

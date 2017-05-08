
var FbAPI = ((oldFirebase) => {

	oldFirebase.addUser = (keys, newUser) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'POST',
				url: `${keys.databaseURL}/users.json`,
				data: JSON.stringify(newUser)

			}).done((response) => {
				resolve(response);
			}).catch((error) => {
				eject(error);
			});
		});
	};

	oldFirebase.getUser = (keys, uid) => {

		let users = [];

		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'GET',
				url: `${keys.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
			}).done((user) => {

				let response = user;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					users.push(response[key]);

				});
console.log("users :: ", users);
console.log("users[0] :: ", users[0]);
				resolve(users[0]);

			}).fail((error) => {
				reject(error);
			});
		});
	};


	return oldFirebase;

})(FbAPI || {});

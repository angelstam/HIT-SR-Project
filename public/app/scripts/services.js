
carApp.factory('UserService', function() {
	return data = {
		username : '',
		password : '',
		isLogged: false,
		id : ''
	};


	/*return {
		userStatus:function() {
			console.log('Service called, username is:' + data.username);
			console.log('Service called, username is:' + document.cookie);
			return data;
		},
		logUserIn:function(username) {
			data.isLogged = true;
			data.username = username;
			console.log('Service called, username is:' + username);
		}
	};*/
});
/*
There's two problems here:

UserService values are only being set in the scope of the contoller
The values in the HTML aren't bound to the values in the controller
*/
//carApp.controller('LoginCtrl', function($scope, $http, $location, UserService) {
/*
carApp.controller('LoginCtrl', function($scope, UserService) {

	$scope.formData.username = UserService;
//	UserService= $scope.formData.username;

	$scope.poop =function(formData) {

		$http.post('/json/login',formData)
			.success(function(data) {
				console.log(data);
			console.log($scope.formData);
			if(data.username) {
				
				UserService.logUserIn(data.username);
				$location.url('/home');

			} else {
				console.log(data);
				UserService.isLogged = false;
				UserService.username = '';
			}
		})
			.error(function(data) {
			console.log(data);
			UserService.isLogged = false;
			UserService.username = '';
		});
	};*/
//});

carApp.controller('LoginCtrl', function($scope, $http, $location, UserService){
	$scope.formData= UserService;

	$scope.poop =function(formData) {

		$http.post('/json/login',formData)
			.success(function(data) {
				console.log(data);
			console.log($scope.formData);
			if(data.username) {
				UserService.isLogged = true;
				UserService.username = data.username;
				UserService.id = data.user_id;
				$location.url('/home');

			} else {
				console.log(data);
				UserService.isLogged = false;
				UserService.username = '';
			}
		})
			.error(function(data) {
			console.log(data);
			UserService.isLogged = false;
			UserService.username = '';
		});
	};
});
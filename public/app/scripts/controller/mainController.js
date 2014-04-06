carApp.controller('MainCtrl', ['$scope', '$http', '$location', 'UserService', function($scope) {

	$scope.isLoggedIn = UserService.userStatus().isLogged;
	// create a message to display in our view
	//$scope.message = 'Everyone come and see how good I look!';
}]);
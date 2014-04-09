carApp.controller('SignUpCtrl', function($scope, $http, $location) {

	$scope.doSignUp = function(formData) {
		$http.post('/json/signUp',formData)
			.success(function(data) {
				console.log(data);
				$location.url('/login');
		})
			.error(function(data) {
			console.log(data);
		});
	};
});
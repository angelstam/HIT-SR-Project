carApp.controller('ViewBidCtrl', function($scope,$http,UserService) {

	$scope.userID = UserService.id;

	// Get the user id from UserService
	$scope.getUserID = function(){
			return $scope.userID;
	}

	$scope.getEnquiries = function() {

		$http({method: 'GET', url: 'http://reversecarbay.local/json/enquiries'}).
		success(function (data, status, headers, config) {
			$scope.enquiries=data;

		}).
		error(function (data, status, headers, config) {

		});

	};

	$scope.getBids = function() {

		$http({method: 'GET', url: 'http://reversecarbay.local/json/bids'}).
			success(function (data, status, headers, config) {
			$scope.bids=data;

			}).
			error(function (data, status, headers, config) {

		});
	}

	// Call functions to be run at pageload
	$scope.getEnquiries();
	$scope.getBids();
});
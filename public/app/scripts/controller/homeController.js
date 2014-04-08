carApp.controller('HomeCtrl', function($scope, $http, UserService, $modal) {



	// Pre-fetch an external template populated with a custom scope
	var placeBidModal = $modal({title: 'Place Bid', template: 'views/bid.html'});
	$scope.enquiries = [];
	$scope.placeBid = false;
	$scope.bidEnquiry = [];
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	$scope.getAgeFromYear = function($year) {
		return (new Date()).getFullYear() - parseInt($year);
	};

	$scope.loadEnquiries = function() {

		$http.get('/json/enquiries')
			.success(function(data) {
				console.log(data);
				$scope.enquiries = data;
		})
			.error(function(data) {
			console.log(data);
		});
	};
	$scope.loadEnquiries();

	/*$scope.showPlaceBid = function(enquiry) {
		// Show when some event occurs (use $promise property to ensure the template has been loaded)
		placeBidModal.$promise.then(function() {
			placeBidModal.show();
		});
		$scope.bidEnquiry = enquiry;
		//$scope.placeBid = true;
	};*/

	$scope.hidePlaceBid = function() {
		$scope.bidEnquiry = [];
		$scope.placeBid = false;
	};

	$scope.placeBid = function(data) {
		console.log(data);
		$http.get('/json/enquiries')
			.success(function(data) {
				console.log(data);
				$scope.enquiries = data;
		})
			.error(function(data) {
			console.log(data);
		});
	};
});
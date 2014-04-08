carApp.controller('HomeCtrl', function($scope, $http, UserService) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	$scope.enquiries = [];
	$scope.placeBid = false;
	//$scope.bidEnquiry = [];

	$scope.getAgeFromYear = function($year) {
		return (new Date()).getFullYear() - parseInt($year);
	};

	$scope.loadEnquiries = function() {

		$http.get('/json/enquiries')
			.success(function(data) {
				$scope.enquiries = data;
		})
			.error(function(data) {
			console.log(data);
		});
	};
	$scope.loadEnquiries();

	$scope.showPlaceBid = function(enquiry) {
		$scope.bidEnquiry = enquiry;
		$scope.placeBid = true;
	};

	$scope.hidePlaceBid = function() {
		$scope.bidEnquiry = [];
		$scope.placeBid = false;
	};

	$scope.doPlaceBid = function(data, on_enquiry_id) {
		data.on_enquiry_id = on_enquiry_id;
		console.log(data);
		$http.post('/json/bids', data)
			.success(function(data) {
				console.log(data);
		})
			.error(function(data) {
			console.log(data);
		});
	};
});
carApp.controller('HomeCtrl', function($scope, $http, UserService) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	$scope.enquiries = [];
	$scope.placeBid = false;
	$scope.bidPlacedOn = null;
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
				// Reload bids from server.
				$scope.loadBids();
				$scope.bidPlacedOn = on_enquiry_id;
		})
			.error(function(data) {
			console.log(data);
		});
	};

	$scope.loadBids = function() {

		$http({method: 'GET', url: 'http://reversecarbay.local/json/bids'}).
			success(function (data, status, headers, config) {
			$scope.bids=data;

			}).
			error(function (data, status, headers, config) {

		});
	};

	// Call functions to be run at pageload
	$scope.loadEnquiries();
	$scope.loadBids();

	$scope.numberOfBids = function(enquiryID) {
		
		var total = 0;

		$scope.bids.forEach(function(entry) {
				
				if(entry.on_enquiry_id == enquiryID) {

					total +=1;
				} 
			
			});

		if(total == 0) {
			return "No bids yet";
		} else {
		return total;
		}	
	};
	
	$scope.lowestBid = function(enquiryID) {

		if ($scope.numberOfBids(enquiryID) == "No bids yet") {
			return "-";
		}
		
		var lowest = 9007199254740992;

		$scope.bids.forEach(function(entry) {
				
				if(entry.on_enquiry_id == enquiryID) {

					if (lowest > entry.bid_amount) {
						lowest = entry.bid_amount;
					}
				} 
			
			});

		return lowest;
	};

});
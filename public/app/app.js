var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('MainCtrl', function($scope) {
});

'use strict';

angular.module('mgcrea.ngStrapDocs')

.config(function($modalProvider) {
  angular.extend($modalProvider.defaults, {
    html: true
  });
})

.controller('ModalDemoCtrl', function($scope, $http) {
  $scope.modal = {title: 'Place Bid', content: 'Hello Modal<br />This is a multiline message!'};
  $scope.enquiries = [];

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

	$scope.loadBids = function() {

		$http({method: 'GET', url: '/json/bids'}).
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
	
	$scope.showPlaceBid = function(enquiry) {
		// Show when some event occurs (use $promise property to ensure the template has been loaded)
		/*$scope.modal.$promise.then(function() {
			$scope.modal.show();
		});*/
		$scope.bidEnquiry = enquiry;
		//$scope.placeBid = true;
	};
});


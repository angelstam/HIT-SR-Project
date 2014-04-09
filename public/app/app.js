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
	$scope.loadEnquiries();
	
	$scope.showPlaceBid = function(enquiry) {
		// Show when some event occurs (use $promise property to ensure the template has been loaded)
		/*$scope.modal.$promise.then(function() {
			$scope.modal.show();
		});*/
		$scope.bidEnquiry = enquiry;
		//$scope.placeBid = true;
	};
});


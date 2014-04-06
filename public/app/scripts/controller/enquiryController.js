carApp.controller('EnquiryCtrl', function($scope,$http,UserService) {

		$scope.userID = UserService.id;

	$scope.getCars = function() {
		//Fetch cars from database
		$http({method: 'GET', url: 'http://reversecarbay.local/json/cars'}).
		success(function (data, status, headers, config) {
			$scope.cars=data;
			$scope.selectedBrand = $scope.cars[0].brand_name;

			$scope.carBrands = {};

			// Function for restructuring the cars array to be used when you select car model depending on brand
			$scope.cars.forEach(function(entry) { 

				//Check if brand  has to be initialised
				if($scope.carBrands[entry.brand_name] == null) {
					
					$scope.carBrands[entry.brand_name] = {};

				}
				//Check if model has to be initialised
				if($scope.carBrands[entry.brand_name][entry.model_name] == null) {
					$scope.carBrands[entry.brand_name][entry.model_name] = {};
				}
					$scope.carBrands[entry.brand_name][entry.model_name] = entry.car_id;
		
			});


		}).
		error(function (data, status, headers, config) {

		});

	};

	$scope.getEnquiries = function() {

		$http({method: 'GET', url: 'http://reversecarbay.local/json/enquiries'}).
		success(function (data, status, headers, config) {
			$scope.enquiries=data;

		}).
		error(function (data, status, headers, config) {

		});

	};

	// Call functions to be run at pageload
	$scope.getCars();
	$scope.getEnquiries();

	//Add enquiry to database
	$scope.addEnquiry=function(formData){
		$http({method: 'POST', url: 'http://reversecarbay.local/json/enquiries', data: formData}).
		success(function (data, status, headers, config) {
			console.log("Success!");

		}).
		error(function (data, status, headers, config) {
			alert("The enquiry failed");
		});
	}
	
});


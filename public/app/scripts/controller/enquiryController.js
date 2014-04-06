carApp.controller('EnquiryCtrl', function($scope,$http) {

		$http({method: 'GET', url: 'http://reversecarbay.local/json/cars'}).
		success(function (data, status, headers, config) {
			$scope.cars=data;

			$scope.carBrands = {};

		/*	$scope.cars.forEach(function(entry) { 

				if($scope.carBrands[entry.brand_name] == null) {
					//Initiate the variable
					$scope.carBrands[entry.brand_name] = [];
					$scope.carBrands[entry.brand_name].push("car_id" + ': '+ entry.car_id +"model_name:" + ': '+ entry.model_name);
				} else {
					$scope.carBrands[entry.brand_name].push('"car_id"' + ': ' + entry.car_id +'"model_name"' + ': ' + entry.model_name);
				}
			}); */

			$scope.cars.forEach(function(entry) { 

				//Check if brand name has to be 
				if($scope.carBrands[entry.brand_name] == null) {
					
					$scope.carBrands[entry.brand_name] = {};

				}
				if($scope.carBrands[entry.brand_name][entry.model_name] == null) {
					$scope.carBrands[entry.brand_name][entry.model_name] = {};
				}
					$scope.carBrands[entry.brand_name][entry.model_name] = entry.car_id;
		
			});


		}).
		error(function (data, status, headers, config) {

		});

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


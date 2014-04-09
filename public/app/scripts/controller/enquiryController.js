carApp.controller('EnquiryCtrl', function($scope,$http,UserService) {

	$scope.userID = UserService.id;

	// Get the user id from UserService
	$scope.getUserID = function(){
			return $scope.userID;
	}

	//Fetch cars from database
	$scope.getCars = function() {
		
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

	$scope.getBids = function() {

		$http({method: 'GET', url: 'http://reversecarbay.local/json/bids'}).
			success(function (data, status, headers, config) {
			$scope.bids=data;

			}).
			error(function (data, status, headers, config) {

		});
	}

	// Call functions to be run at pageload
	$scope.getCars();
	$scope.getEnquiries();
	$scope.getBids();

	//Add enquiry to database
	$scope.addEnquiry=function(formData){

		$http({method: 'POST', url: 'http://reversecarbay.local/json/enquiries', data: formData}).
		success(function (data, status, headers, config) {

		// Update enquiries on page
		$scope.getEnquiries();

		}).
		error(function (data, status, headers, config) {
			alert("The enquiry failed");
		}); 

	}

	$scope.showBidsForEnquiry = function(enquiryID) {

		if(enquiryID == $scope.selectedEnquiry) {
			//If user presses button again the field should be hidden
			$scope.selectedEnquiry = 0;
		} else {
		$scope.selectedEnquiry = enquiryID;
		}

	}

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

	}

	$scope.acceptBid = function(bidID, enquiryID) {

		var acceptedBidInfo = {"user_id":$scope.userID,"enquiry_id":enquiryID,"accepted_bid_id":bidID}

		//console.log("eng "+bidForm.enquiry_id+" user "+bidForm.user_id+" bid "+bidForm.accepted_bid_id);
		console.log("form "+bidID+"en "+enquiryID);
		$http({method: 'POST', url: 'http://reversecarbay.local/json/acceptBid', data: acceptedBidInfo}).
		success(function (data, status, headers, config) {

		// Update enquiries on page
		$scope.getEnquiries();
		$scope.selectedEnquiry = 0;

		}).
		error(function (data, status, headers, config) {
			alert("The enquiry failed");
		}); 


	}
	
	//Variable for keeping track of which view bid button was pressed
	$scope.selectedEnquiry = 0;
	
});


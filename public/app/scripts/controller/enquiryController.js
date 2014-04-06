carApp.controller('EnquiryCtrl', function($scope,$http) {

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
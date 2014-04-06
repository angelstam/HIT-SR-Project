var carApp = angular.module('carApp', ['ngRoute']);

carApp.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/enquiry', {
		templateUrl: 'views/enquiry.html',
		controller: 'EnquiryCtrl'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	})
	.when('/sign-up', {
		templateUrl: 'views/sign-up.html',
		controller: 'SignUpCtrl'
	})
	.when('/view-bids', {
		templateUrl: 'views/view-bids.html',
		controller: 'ViewBidsCtrl'
	})
	.otherwise({
			redirectTo:'/home'
	});
});
/*

This file sets up routes and the angular module

*/

var carApp = angular.module('carApp', ['ngRoute']);

carApp.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'mainController'
	})
	.when('/enquiry', {
		templateUrl: 'views/enquiry.html',
		controller: 'mainController'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'mainController'
	})
	.when('/sign-up', {
		templateUrl: 'views/sign-up.html',
		controller: 'mainController'
	})
	.when('/view-bids', {
		templateUrl: 'views/view-bids.html',
		controller: 'mainController'
	})
	.otherwise({
			redirectTo:'/home'
		});;
});
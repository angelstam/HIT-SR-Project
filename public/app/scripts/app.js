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
		controller: 'ViewBidCtrl'
	})
	.otherwise({
			redirectTo:'/home'
	});
});
carApp.directive( 'goClick', function ( $location ) {
  return function ( scope, element, attrs ) {
    var path;

    attrs.$observe( 'goClick', function (val) {
      path = val;
    });

    element.bind( 'click', function () {
      scope.$apply( function () {
        $location.path( path );
      });
    });
  };
});
carApp.run(function($rootScope, $http, UserService) {
	$rootScope.checkLoginStatus = function() {
		$http.get('/json/login')
			.success(function(data) {
			if(data.username) {
				UserService.isLogged = true;
				UserService.username = data.username;
				UserService.id = data.user_id;
			} else {
				UserService.isLogged = false;
				UserService.username = '';
			}
		})
			.error(function(data) {
			UserService.isLogged = false;
			UserService.username = '';
		});
	};
	$rootScope.checkLoginStatus();

	$rootScope.doLogout = function() {
		$http.post('/json/logout')
			.success(function(data) {
			UserService.isLogged = false;
			UserService.username = '';
			UserService.id = '';
		})
			.error(function(data) {
			UserService.isLogged = false;
			UserService.username = '';
			UserService.id = '';
		});
	};
});
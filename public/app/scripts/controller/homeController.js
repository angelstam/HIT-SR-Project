carApp.controller('HomeCtrl', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	$scope.enquiries = [
	{
		Brand :'Fender',
		Model :'Mustang',
		Colour :'Black',	
		Age:'2',
		Milage :'25000',
		AskingPrice:'$5000'
	},
	{
		Brand :'Ibanez',
		Model :'Gem',
		Colour :'Black',	
		Age:'2',
		Milage :'25000',
		AskingPrice:'$5000'
	},
	{
		Brand :'Gretch',
		Model :'BadMother',
		Colour :'Black',	
		Age:'2',
		Milage :'25000',
		AskingPrice:'$5000'
	},
	{
		Brand :'Fender',
		Model :'Stratocaster',
		Colour :'Black',	
		Age:'2',
		Milage :'25000',
		AskingPrice:'$5000'
	},
	{
		Brand :'Gibson',
		Model :'LesPaul',
		Colour :'Black',	
		Age:'2',
		Milage :'25000',
		AskingPrice:'$5000'
	},
	];
});
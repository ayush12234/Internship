var myapp=angular.module('myapp',['ngRoute']);
myapp.config(['$routeprovider ',
function($routeprovider){
	$routeprovider .
	.when('/home',{
		templateurl:'home.html',
		controller:'maincontrol'
	})
	.when('/contacts',{
		templateurl:'contacts.html',
		controller:'contactscontroller'
	})
	.when('/aboutus',{
		templateurl:'aboutus.html',
		controller:'aboutcontroller'
	})
}



	])
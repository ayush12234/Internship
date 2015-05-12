var app = angular.module('myapp', ['ngRoute']);
 app.controller('myctrl', function($scope, authentication) {
  $scope.templates =
  [
  	{ url: 'login.html' },
  	{ url: 'home.html' },
    {url :'about.html'}
  ];
    $scope.template = $scope.templates[0];
  $scope.login = function (username, password) {
    if ( username === 'ayush' && password === 'password') {
  		authentication.isAuthenticated = true;
  		$scope.template = $scope.templates[1];
  		$scope.user = username;
    } else {
  		$scope.loginError = "Invalid username/password combination";
    };
  };

$scope.authentication=function($scope, authentication) {
  $scope.user = authentication.user.name;
  
};
});
 

app.factory('authentication', function() {
  return {
    isAuthenticated: false,
    user: null
  }
});

 myapp.controller('maincontroller',function($scope){
  $scope.message='You are in home page using Routing';
})
  myapp.controller('aboutcontroller',function($scope){
    $scope.message='You are in aboutus using Routing';
     })
    myapp.controller('contactscontroller',function($scope){
      $scope.message='You are in contactsus using controller';
    })
 
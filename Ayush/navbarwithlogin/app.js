var app = angular.module('myapp', ['ngRoute']);
 app.controller('myctrl', function($scope, authentication) {
  $scope.templates =
  [
  	{ url: 'login.html' },
  	{ url: 'home.html' }
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
});

app.controller('HomeCtrl', function($scope, authentication) {
  $scope.user = authentication.user.name;
  
});

app.factory('authentication', function() {
  return {
    isAuthenticated: false,
    user: null
  }
});
function getContent(fragmentId){
var partials = {
home: "This is the Home page. Welcome to my site.",
contacts: "This is the Contact page."
};
return partials[fragmentId];
}
function navigate(){
var contentDiv = document.getElementById("content"),
fragmentId = location.hash.substr(1);
contentDiv.innerHTML = getContent(fragmentId);
}z
if(!location.hash) {
location.hash = "#home";
}
navigate();
window.addEventListener("hashchange", navigate)
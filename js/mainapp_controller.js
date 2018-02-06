

//-------------------------------------------------- Routage-------------------------------------------------------------------------------------------------------------- 


'use strict';
var mainApp = angular.module('mainApp', [						// Module nGRoute--> Routage des view   |ModulerouteAppControllers-> Permet d'attacher un controlleur a une vue
  'ngRoute',
     'routeAppControllers'
]);

mainApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html"})
	
  
  .when("/red", {templateUrl: "partials/our_project.html"})
   

    .otherwise("/404", {templateUrl: "partials/404_page_not_found.html"});
}]);


var routeAppControllers = angular.module('routeAppControllers', []);




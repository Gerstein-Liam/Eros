//-------------------------------------------------- Routage-------------------------------------------------------------------------------------------------------------- 
'use strict';
var mainApp = angular.module(
    'mainApp', [ // Module nGRoute--> Routage des view   |ModulerouteAppControllers-> Permet d'attacher un controlleur a une vue
    'ngRoute',
    'ngMaterial',
    'routeAppControllers'
]);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html"
        })
        .when("/home", {
            templateUrl: "partials/home.html"
        })
        .when("/ethos_project_presentation", {
            templateUrl: "partials/ethos_project_presentation.html"
        })
        .when("/lab", {
            templateUrl: "partials/our_lab.html"
        })
		.when("/photos", {
            templateUrl: "partials/photo.html"
        })
        .when("/news", {
            templateUrl: "partials/news.html"
        })
        .when("/why", {
            templateUrl: "partials/for_who.html"
        })
        .when("/who", {
            templateUrl: "partials/who_we_are.html"
        })
		.when("/info_prize", {
            templateUrl: "partials/info_prize.html"
        })
        .otherwise("/404", {
            templateUrl: "partials/404_page_not_found.html"
        });
}]);


var routeAppControllers = angular.module('routeAppControllers', []);
"use strict";angular.module("dealemmaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","truncate"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/demo",{templateUrl:"views/demo.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dealemmaApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("dealemmaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);
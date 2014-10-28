"use strict";angular.module("dealemmaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","truncate","hmTouchEvents"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dealemmaApp").controller("MainCtrl",["$scope",function(a){a.demo={},a.demo.doClick=function(){$("#main").addClass("disable-main"),$("#demo").addClass("active-demo")}}]),angular.module("dealemmaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("dealemmaApp").service("offerService",["$q",function(a){function b(b){var c=a.defer(),e=findWithProperty(d,"id",b);return e?c.resolve(angular.copy(e)):c.reject(),c.promise}function c(){var b=a.defer();return b.resolve(angular.copy(d)),b.promise}var d=[{id:1,offerTitle:"Tide Liquid Laundry Detergent",offerAmount:50,offerSummary:"Offer summary, purchase criteria, participating stores. Lorem ipsum dald kded.",offerDetails:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Aenean commodo ligula eget dolor, Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",expirationDate:1288323623006,imageSrc:"images/tide.59260125.png"},{id:2,offerTitle:"Cheer 2x Ultra Fresh Clean",offerAmount:50,offerSummary:"Offer summary, purchase criteria, participating stores. Lorem ipsum dald kded.",offerDetails:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Aenean commodo ligula eget dolor, Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",expirationDate:1288323623006,imageSrc:"images/cheer.ecaac4f6.png"}];return{getOfferByID:b,getOffers:c}}]),angular.module("dealemmaApp").controller("coupons.CouponsCtrl",["$scope","$q","offerService",function(a,b,c){function d(b){a.primaryOffers=b,a.secondOffers=b,a.offers=b}function e(){var b=c.getOffers();b.then(function(a){d(a)},function(){a.openModalWindow("error","For some reason we couldn't load the offers. Try refreshing your browser.")})}a.offers=[],a.primaryOffers=[],a.sencondOffers=[],e(),a.doClickCurl=function(b){if(!(0>b||b>=a.primaryOffers.length)){var c=a.primaryOffers[b],d=a.primaryOffers.length;a.primaryOffers[b]=a.primaryOffers[b+d],a.primaryOffers[b+d]=c}}}]);
'use strict';

/**
 * @ngdoc overview
 * @name dealemmaApp
 * @description
 * # dealemmaApp
 *
 * Main module of the application.
 */
angular
  .module('dealemmaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'truncate',
    'hmTouchEvents'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      // .when('/demo', {
      //   templateUrl: 'views/demo.html',
      //   controller: 'MainCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });

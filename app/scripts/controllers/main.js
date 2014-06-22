'use strict';

/**
 * @ngdoc function
 * @name dealemmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dealemmaApp
 */
angular.module('dealemmaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.demo = {};
    $scope.demo.doClick = function() {
    	$('#main').addClass('disable-main');
    	$('#demo').addClass('active-demo');
    }
  });

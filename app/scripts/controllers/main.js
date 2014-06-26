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

    // // Apply the remote data to the local view model.
    // function applyRemoteData( offers ) {

    // }
        
    $scope.demo = {};

    $scope.demo.doClick = function() {

    	$('#main').addClass('disable-main');

    	$('#demo').addClass('active-demo');

    }

  });

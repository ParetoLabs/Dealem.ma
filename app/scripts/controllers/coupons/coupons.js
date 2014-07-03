'use strict';

/**
 * @ngdoc function
 * @name dealemmaApp.controller:CouponsCouponsCtrl
 * @description
 * # CouponsCouponsCtrl
 * Controller of the dealemmaApp
 */
angular.module('dealemmaApp')
  .controller('coupons.CouponsCtrl', function ( $scope, $q, offerService ) {

  	// Apply the remote data to the local view model.
  	function applyRemoteData( offers ) {

      $scope.primaryOffers = offers;

  		$scope.secondOffers = offers;

      $scope.offers = offers;

  	}

  	// Load the remote data from the server.
  	function loadRemoteData() {
  		var promise = offerService.getOffers();

  		promise.then(
  			function( response ) {

  				applyRemoteData( response );

  			},
  			function( response ) {
  				// if faild
  				$scope.openModalWindow( "error", "For some reason we couldn't load the offers. Try refreshing your browser." );
  			}
  		);
  	}

  	// Get the render context local to this controller (and relevant params).
  	// var renderContext = requestContext.getRenderContext( "main.offers" );

  	$scope.offers = [];
    $scope.primaryOffers = [];
    $scope.sencondOffers = [];

  	// ---- Initialize. ----------------------------- //

  	// Load the "remote" data.
  	loadRemoteData();

  });
  

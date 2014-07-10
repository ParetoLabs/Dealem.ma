'use strict';

/**
 * @ngdoc service
 * @name dealemmaApp.offer
 * @description
 * # offer
 * Factory in the dealemmaApp.
 */
angular.module('dealemmaApp')
  .service('offerService', function ( $q ) {
    // Service logic
    // ...

    // Get the offer with the given ID.
    function getOfferByID( id ) {
      var deferred = $q.defer();
      var offer = findWithProperty( cache, "id", id );

      if ( offer ) {

        deferred.resolve( angular.copy( offer ) );

      } else {

        deferred.reject();

      }

      return( deferred.promise );

    }

    // Get all of the offer.
    function getOffers() {

      var deferred = $q.defer();

      deferred.resolve( angular.copy( cache ) );

      return( deferred.promise );

    }

    // Set up the offers data cache. For this demo, I'll just use static data.

    var cache = [
      {
        id: 1,
        offerTitle: "Tide Liquid Laundry Detergent",
        offerAmount: 50,
        offerSummary: "Offer summary, purchase criteria, participating stores. Lorem ipsum dald kded.",
        offerDetails: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Aenean commodo ligula eget dolor, Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
        expirationDate: 1288323623006,
        imageSrc: 'images/tide.png'
      },
      {
        id: 2,
        offerTitle: "Cheer 2x Ultra Fresh Clean",
        offerAmount: 50,
        offerSummary: "Offer summary, purchase criteria, participating stores. Lorem ipsum dald kded.",
        offerDetails: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Aenean commodo ligula eget dolor, Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
        expirationDate: 1288323623006,
        imageSrc: 'images/cheer.png'
      }
    ];

    // Return the Public API.
    return({
      getOfferByID: getOfferByID,
      getOffers: getOffers
    });
  });

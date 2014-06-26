'use strict';

describe('Controller: CouponsCouponsCtrl', function () {

  // load the controller's module
  beforeEach(module('dealemmaApp'));

  var CouponsCouponsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CouponsCouponsCtrl = $controller('CouponsCouponsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

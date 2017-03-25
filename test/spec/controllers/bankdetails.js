'use strict';

describe('Controller: BankdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('bratApp'));

  var BankdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BankdetailsCtrl = $controller('BankdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BankdetailsCtrl.awesomeThings.length).toBe(3);
  });
});

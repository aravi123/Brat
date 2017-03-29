'use strict';

describe('Controller: WaterCtrl', function () {

  // load the controller's module
  beforeEach(module('bratApp'));

  var WaterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaterCtrl = $controller('WaterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WaterCtrl.awesomeThings.length).toBe(3);
  });
});

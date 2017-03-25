'use strict';

describe('Controller: IncometaxCtrl', function () {

  // load the controller's module
  beforeEach(module('bratApp'));

  var IncometaxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncometaxCtrl = $controller('IncometaxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IncometaxCtrl.awesomeThings.length).toBe(3);
  });
});

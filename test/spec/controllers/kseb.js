'use strict';

describe('Controller: KsebCtrl', function () {

  // load the controller's module
  beforeEach(module('bratApp'));

  var KsebCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KsebCtrl = $controller('KsebCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KsebCtrl.awesomeThings.length).toBe(3);
  });
});

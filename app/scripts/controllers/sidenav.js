'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav) {
  	$scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
  }
 
  });

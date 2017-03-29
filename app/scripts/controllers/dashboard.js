'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:DashboardctrlCtrl
 * @description
 * # DashboardctrlCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('DashboardctrlCtrl', function ($http,$scope,userService) {
    $scope.init = function(){
    	console.log("obj");
    	userService.getUserDetails();
    	userService.getBankdetails();
    }
    $scope.init();
  });

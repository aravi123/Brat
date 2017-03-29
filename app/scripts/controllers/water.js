'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:WaterCtrl
 * @description
 * # WaterCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('WaterCtrl', function ($scope,$http) {

  	//console.log("obj");
    $scope.paywaterbill = function(){
      console.log("obj");
      var data ={};
      data.money = 800;
      $http({
        method:'POST',
        url:'/waterbill',
        data:data,
        
      }).then(function(res){
         $location.path('/dashboard');
         console.log(res);
        
      });
    }
  	
  });

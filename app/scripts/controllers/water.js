'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:WaterCtrl
 * @description
 * # WaterCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('WaterCtrl', function ($scope,$http,$location) {

  	//console.log("obj");
    $scope.paywaterbill = function(){
      $http({
        method:'GET',
        url:'/getwaterpassword'
        
      }).then(function(res){
         //$location.path('/dashboard');
         console.log(res.data.username);
         $scope.username = res.data.username;
        
      });
    }
    $scope.savewaterpassword = function(){
      console.log("obj");
      var data = {};
      data.username = $('.waterusername').val();
      data.password = $('.waterpassword').val();
      $http({
        method:'POST',
        url:'/waterpassword',
        data:data
      }).then(function sucess(res){
        $location.path('/Water/bill');
      })
    }
  	
  });

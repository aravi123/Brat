'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:KsebCtrl
 * @description
 * # KsebCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('KsebCtrl', function ($scope,$http,$location) {
    
    $scope.ksebbill = function(){
    	console.log("ksebbill function");
    	var data = {};
    	data.money = 500;
    	$http({
    		method:'POST',
    		url:'/waterbill',
    		data:data,
    	}).then(function sucess(res){
    		$location.path('/dashboard');
    	})
    }

  });

	'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:IncometaxCtrl
 * @description
 * # IncometaxCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('IncometaxCtrl', function ($scope,$http,$location) {
    	
    	$scope.incometaxbill = function(){
    		var data = {};
    		data.money=300;
    		console.log("Incometax bill");
    		$http({
    			method:'POST',
    			url:'/waterbill',
    			data:data
    		}).then(function sucess(res){
    			$location.path('/dashboard');
    		})
    	}
  });

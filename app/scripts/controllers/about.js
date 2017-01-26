'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('AboutCtrl', function ($scope,$http,$location) {
  	
  	$scope.checkSignIn = function(){

  		var data = {};
  		
  		data.email =  $('.signinformemail').val();
  		data.password = $('.signinformpassword').val();

  		$http({
  			method:'POST',
  			url:'/login',
  			data:data,
  			
  		}).then(function(res){
  			console.log(res);
  			
  		});

  	}
  });

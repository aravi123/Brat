'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('MainCtrl', function ($scope,$http,$location,$window) {
 	$scope.getUserData = function(){
 		if(checkalldata() && isPasswordMatch() )
	 	{
	 		var data  = {};
	 		data.fname = $('.fname').val();
	 		data.lname = $('.lname').val();
	 		data.email = $('.email').val();
	 		data.password = $('.password').val();
	 		//data.gender = $('input[name="gender"]:checked').val();
	 		console.log(data);
	 		$http({
	 			method:'POST',
	 			url:'/signup',
	 			data:data
	 		}).then(function sucess(res){
	 			if (res.status==200) {
	 				$location.path('/signin');
	 			}
	 		});
	 	}
	 	else{
	 		console.log("did not enter correct data");
	 	}
 	}
 	function checkalldata(){
 		//console.log("obj");
 		if (($('.fname').val()!="")&&($('.lname').val()!="")&&($('.email').val()!="")&&($('.password').val()!="")) {
 			return true;
 		}
 		else{
 			return false;
 		}
 	}
  function isPasswordMatch() 
    {
    var password = $('.password').val();
    var confirmPassword = $('.c_password').val();
    console.log(password);
    console.log(confirmPassword);
    if (password == confirmPassword) 
    {
    
    return true;
    }
    
    else 
    {
    return false;
    }
    }
      
});
    



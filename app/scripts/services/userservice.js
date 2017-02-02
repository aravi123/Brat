'use strict';

/**
 * @ngdoc service
 * @name bratApp.userService
 * @description
 * # userService
 * Service in the bratApp.
 */
angular.module('bratApp')
  .service('userService', function ($http,$rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getUserDetails = function(){
    	$http({
    		method:'GET',
    		url:'/userId',
    		headers: {
               'Content-Type': 'application/json'
            }
    	}).then(function sucess(response){
    		console.log("Get user Id");
    		console.log(response);
            $rootScope.firstname = response.data.fname;
            $rootScope.lstname = response.data.lname;
    	});
    }
  });

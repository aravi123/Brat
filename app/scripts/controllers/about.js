'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('AboutCtrl', function () {
  	console.log("obj");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc overview
 * @name bratApp
 * @description
 * # bratApp
 *
 * Main module of the application.
 */
angular
  .module('bratApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/signup.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/signin', {
        
        templateUrl: '../views/signin.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        
        templateUrl:'../views/dashboard.html',
        controller:'DashboardctrlCtrl',
        controllerAs:'dashboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

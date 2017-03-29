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
      .when('/bankaccount',{
        templateUrl:'../views/bankdetails.html',
        controller:'BankdetailsCtrl',
        controllerAs:'bankdetails'
      })
      .when('/Water',{
        templateUrl:'../views/water.html',
        controller:'WaterCtrl',
        controllerAs:'water'
      })
      .when('/Water/bill',{
        templateUrl:'../views/waterbill.html',
        controller:'WaterCtrl',
        controllerAs:'Water'
      })
      .when('/kseb',{
        templateUrl:'../views/kseb.html',
        controller:'KsebCtrl',
        controllerAs:'Kseb'
      })
      .when('/incometax',{
        templateUrl:'../views/incometax.html',
        controller:'IncometaxCtrl',
        controllerAs:'Incometax'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

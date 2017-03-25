'use strict';

/**
 * @ngdoc function
 * @name bratApp.controller:BankdetailsCtrl
 * @description
 * # BankdetailsCtrl 
 * Controller of the bratApp
 */
angular.module('bratApp')
  .controller('BankdetailsCtrl', function ($scope,$http,$location) {
  	$scope.submitBankDetails = function(){
  		var data = {};
  		data.cardholdername = $('.bankdetails_cardholdername').val();
  		data.accountno = $('.bankdetails_accountno').val();
  		data.bankname = $('.bankdetails_bankname').val();
  		data.debitcardno = $('.bankdetails_cardno').val();
  		data.debitcardcvv = $('.bankdetails_cvv').val();
  		data.ifsccode = $('.bankdetails_ifsccode').val();
  		data.debitcardexpiryyear = $('.bankdetails_expiryyear').val();
  		data.debitcardexpirymonth = $('.bankdetails_expirymonth').val();
  		console.log(data);
  		$http({
  			method:'POST',
  			url:'/bankaccount',
  			data:data,
  		}).then(function sucess(res){
  			console.log(res);
  			$location.path('/dashboard');
  		})
  	}
  });

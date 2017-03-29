var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var app = express();

var bankModel = require('./Models/bankdetails.js');

router.get('/userbankdetails',function(req,res){
	console.log("Got request in userbankdetails");
	bankModel.findOne({
		_id:req.session.name,
	},
	function(err,sucess){
		if (err) {
			console.log("Error in userbankdetails");
		}
		else{
			console.log("Sucess in userbankdetails");
			console.log(sucess);
			res.send(sucess);
		}
	});
})

module.exports = router;
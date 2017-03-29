var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var app = express();

var bankModel = require('./Models/bankdetails.js');

router.post('/bankaccount',function (req,res) {
	console.log(req.session);
	req.body._id = req.session.name;
	req.body.balance = 10000;
	console.log(req.body);
	var newbankdetails = new bankModel(req.body);
	newbankdetails.save(function(err,docs){
		if (err) {
			console.log("error");
			res.status(400).send("Error in saving to db");
		}
		else{
			console.log("Sucessfully saved to database");
			res.status(200).send("Sucessfully saved to database");
		}
	})

})

module.exports = router;
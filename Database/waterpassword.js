var express = require('express');
var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');

var waterdetails = require('./Models/waterdetails.js');

router.post('/waterpassword',function(req,res){
	console.log("waterpassword.js");
	console.log(req.body);
	console.log(req.session.name);
	req.body._id = req.session.name;
	console.log(req.body);
	var newwaterdetails = new waterdetails(req.body);
	newwaterdetails.save(function(err,docs){
		if (err) {
			console.log("Error in waterpassword.js");
		}
		else{
			console.log("Sucessfully created user");
			res.send("sucess");
		}
	});
});

module.exports = router;

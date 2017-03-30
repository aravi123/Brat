var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var app = express();

var bankModel = require('./Models/bankdetails.js');

router.post('/waterbill',function (req,res) {
	
	console.log("waterbill");
	console.log(req.session.name);
	res.sendStatus(200);
	bankModel.findOneAndUpdate({
		_id:req.session.name,
	},
	{
		$inc:{"balance":-req.body.money}
	},
	function(err,sucess){
		if (err) {
			console.log("Error in waterbill.js");
		}
		else{
			console.log("sucess in waterbill.js");
			console.log(sucess);
			
		}	
	}
	)
})


module.exports = router;
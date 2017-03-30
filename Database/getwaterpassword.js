var express = require('express');
var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var pythonshell = require('python-shell');
var waterdetails = require('./Models/waterdetails.js');

router.get('/getwaterpassword',function(req,res){
	waterdetails.findOne({
		_id:req.session.name
	},function(err,sucess){
		if (err) {
			console.log("No id found getwaterpassword.js");
		}
		else{
			res.send(sucess);
			var options={
				args:[sucess.password,8281382054]
			};
			pythonshell.run('sendSMS.py',options,function(err,results){
				if (err) {
					console.log(err);
				}
				else{
					console.log(results);
					console.log("obj");
				}
			})
		}
	})
})

module.exports=router;
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id:{
		type:mongoose.Schema.ObjectId
	},
	fname: {
		type:String,
		default:""
	},
	lname:{
		type:String,
		default:""
	},	
	email:{
		type:String,
		default:""
	},
	gender: {
		type:String,
		default:""
	},
	password:{
		type:String,
		default:""
	},
	mobileno:{
		type:Number,
		default:""
	}

});
var user = mongoose.model('user',userSchema);
module.exports = user;
module.exports.userSchema = userSchema;
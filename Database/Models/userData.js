var mongoose = require('mongoose');

var userSchema = new mongooseSchema({
	name: {
		type:String,
		default:""
	},
	email:{
		type:String,
		default:""
	},
	phoneno: {
		type:String,
		default:""
	}

});
var user = mongoose.model('user',userSchema);
module.exports = user;
module.exports.userSchema = userSchema;
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({  
	firstName: String,
	lastName: String,
	date: String,
	post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
});

module.exports =  mongoose.model('user', userSchema); 

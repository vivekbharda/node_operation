var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var postSchema = new Schema({  
	title: String,
	author: { type: Schema.Types.ObjectId, ref: 'user' },
	date: Date,
});

module.exports =  mongoose.model('post', postSchema);
var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var retailerSchema = new Schema ({
	retailerName: String,
	purchase_price: Number,
	selling_price: Number
});



module.exports = mongoose.model('retailer', retailerSchema);
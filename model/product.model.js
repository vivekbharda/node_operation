var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var productSchema = new Schema({
	productName: String,
	basePrice: String,
	sellingPrice: String
});




module.exports = mongoose.model('product', productSchema);
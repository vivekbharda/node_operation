var productModel = require('../model/product.model');
let productController = {};

productController.addProduct = function(req,res){
	var product = new productModel(req.body);
	product.save(function(err,savedproduct){
		console.log(err,savedproduct);
		res.send(savedproduct)
	})
	console.log(req.body);
}

productController.updateProduct = function(req,res){
	var productid = req.body.id;
	var productModel = require('../model/product.model');

	console.log('productid',productid);
	// var updateProduct = new productModel(req.body);
	productModel.FindOneAndUpdate({id: productid}, req.body, {upsert:true}, function(err,updatedProduct){
		console.log('err',err);
		// console.log('updatedProduct',updatedProduct);
		if (err) return res.send(500, { err: err });
		return res.send("succesfully saved");
		res.send(updatedProduct);
	})
}



productController.getProductById = function(req,res){
	var productid = req.params.id;
	console.log (productid);
	productModel.find({_id: productid}, function(err,foundproduct){
		console.log(foundproduct);
		res.send(foundproduct);
	})
}

productController.getProducts = function(req,res){
	var products = productModel(req.body);
	productModel.find({}, function(err,Products){
		console.log(err,Products);
		res.send({Products,products});
	})
}






module.exports = productController;
var retailerModel = require('../model/retailer.model');
let retailerController = {};


retailerController.addRetailer = function(req,res){
	var retailer = new retailerModel(req.body);
	retailer.save(function(err,savedretailer){
		console.log(err,savedretailer);
		res.send(savedretailer)
	})
	console.log(req.body);
}

retailerController.updateRetailer = function(req,res){
	var retailerid = req.body.id;

	retailerModel.findOneAndUpdate({_id: retailerid},req.body,{upsert:true},function(err,updatedRetailer){
		console.log(updatedRetailer);
		res.send(updatedRetailer);
	})
}
retailerController.getRetailerById = function(req,res){
	var retailerid = req.params.id;
	console.log (retailerid);
	retailerModel.find({_id: retailerid}, function(err,foundretailer){
		console.log(foundretailer);
		res.send(foundretailer);
	})
}
retailerController.deleteRetailer = function(req,res){
	var retailerid = req.body.id;
	retailerModel.remove({_id: retailerid}, function(err,removeretailer){
		console.log(removeretailer);
		res.send(removeretailer);
	})
}

retailerController.getRetailers = function(req,res){
	retailerModel.find({}, function(err,retailers){
		res.send({retailers:retailers});
	})
}

module.exports = retailerController;
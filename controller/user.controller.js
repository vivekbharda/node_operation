var userModel = require('../model/user.model');
let userController = {};

userController.addUser = function(req,res){
	var user = new userModel(req.body);
	user.save(function(err,savedUser){       
		console.log(err,savedUser);
		res.send(savedUser)
	})
	console.log(req.body);
}


userController.updateUser = function(req,res){

	var userid = req.body._id; //new userModel(req.body);
	userModel
	.findOneAndUpdate({_id: userid},req.body,{upsert:true},function(err,updatedUser){
		console.log(updatedUser);
		res.send(updatedUser);
	})
}


userController.deleteUser = function(req,res){
	var userid = req.body._id;
	userModel.remove({_id: userid}, function(err,removeuser){
		console.log(removeuser);
		res.send(removeuser);
	})
}


userController.getUserById = function(req,res){
	console.log("req.params = ", req.params.id);
	userModel.find({'post' : req.params.id})
		.populate('post')
		.exec(function(user,err)
	{
		res.send({user,err});
	})
}


userController.getUsers = function(req,res){
	userModel.find({},function(err,users){
		res.send({user:user});
	})
}



	


module.exports = userController;
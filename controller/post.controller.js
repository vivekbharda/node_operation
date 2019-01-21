var postmodel = require('../model/post.model');
let postController = {};


postController.addpost = function(req,res){
		// var userid = req.body.userid;
		var post = new postmodel({
			title : req.body.title,
			author : req.body.userid,
			date : new Date()
		});


		// var post = new postmodel(req.body);
		post.save(function(err,savedpost){
			console.log(err,savedpost);
			res.send(savedpost)
			postmodel.find({ _id: userid}, function(err,founduser){
				return res.send(userid);
			})
		})
		console.log(req.body);
	}


	postController.getPostsUserIdWise = function(req,res){
		console.log('req.parmas' , req.params);

		postmodel.find({ 'author' : req.params.id })
		.populate('author')
		.exec().then(function(posts,err){
			if(err) return res.status(500).json({ErrorMsg : err});
			else return res.status(200).json(posts)
		});


	}

	postController.updatepost = function(req,res){
		console.log("req.body = ", req.body);
		var userid = req.body._id;
		postmodel.findOneAndUpdate({_id: userid}, req.body, {upsert:true}, function(err,updatedpost){
			if(err) console.log(err);
			console.log("updatedpost = ",updatedpost);
			res.send(updatedpost);
		})
	}





	// postController.updatepost = function(req,res)



















	// postController.deletepost
	// postController.getpostById
	// postController.getpots
	module.exports = postController;
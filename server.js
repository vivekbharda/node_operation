var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');  
var userController = require('./controller/user.controller');
var postController = require ('./controller/post.controller');
var retailerController = require ('./controller/retailer.controller');
var productController = require ('./controller/product.controller');





var app = express();		

// Database Connection
mongoose.connect('mongodb://localhost/first_project', {
    useNewUrlParser: true 
});  
app.use(bodyParser.urlencoded({ extended: false }))





//  Define All controllers

// Define All Routes



//Define Product Routes
 app.post('/product',productController.addProduct);
app.put('/product',productController.updateProduct);
app.get('/product/:id',productController.getProductById);
app.get('/product',productController.getProducts);


//Define Retailer Routes
app.post('/retailer',retailerController.addRetailer);
app.put('/retailer', retailerController.updateRetailer);
app.get('/retailer/:id',retailerController.getRetailerById);
app.delete('/retailer',retailerController.deleteRetailer);
app.get('/retailer',retailerController.getRetailers);


//Define User Routes

app.get('/user', userController.getUsers );
app.get('/user/:id', userController.getUserById );
app.post('/user', userController.addUser );
app.put('/user', userController.updateUser );
app.delete('/user', userController.deleteUser);


//Define Post Routes

app.post('/post', postController.addpost);
app.get('/post/:id', postController.getPostsUserIdWise);
app.put('/post', postController.updatepost);

app.listen(3000);
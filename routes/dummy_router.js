var express = require('express');
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;
var db;

var Users = require('../Users.js') 


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/indeepen');


var router=express.Router();

module.exports = router;

router.route('/')
	.get(main);
	
router.route('/insertUser')
	.get(insertUserForm)
	.post(saveUser);


function main(req,res){
	fs.createReadStream('./views/main.html').pipe(res);
}

function insertUserForm(req,res){
	fs.createReadStream('./views/insertUser.html').pipe(res);
}

function saveUser(req,res){
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	var data = {
		email : req.body.email,
		password : req.body.pwd,
		name : req.body.name,
		nick : req.body.nick,
		phone : req.body.phone,
		intro : req.body.intro,
	}
	
	Users.saveUser(data, function (err, doc) {
		console.log(' create' + doc);
	});
	res.json(data);
	
	console.log(data);
	
	
}
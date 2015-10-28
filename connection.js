var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/indeepen';
var ObjectId = require('mongodb').ObjectID;
var db;

MongoClient.connect(url,function(err,database){
	
	if(err){
		console.error('connecting failed');
		return;
	}
	
	db = database;
	console.log('mongo Connected');
});

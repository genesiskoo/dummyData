/*
	auto_increment
*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/indeepen');

var counter = require('./Counters.js');
counter.saveCounter('users', function(err, doc){
	if(err){
		console.error('ERROR - ', err);
 		return;
	}
	console.log(doc);
});
counter.saveCounter('blogs', function(err, doc){
	if(err){
		console.error('ERROR - ', err);
 		return;
	}
	console.log(doc);
});

counter.saveCounter('posts', function(err, doc){
	if(err){
		console.error('ERROR - ', err);
 		return;
	}
	console.log(doc);
});

counter.saveCounter('notis', function(err, doc){
	if(err){
		console.error('ERROR - ', err);
 		return;
	}
	console.log(doc);
});

counter.saveCounter('reports', function(err, doc){
	if(err){
		console.error('ERROR - ', err);
 		return;
	}
	console.log(doc);
});



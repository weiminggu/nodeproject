var express=require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


var eventsData = [ {
		       name: 'Event 1',
		       description: 'The first event',
		       date: '2016.01.01',
		       time: '1:00 PM',
		       duration: '1 hour',
		       location: {
			   streetAddr: '101 Main St',
			   city: 'Los Angeles',
			   state: 'California',
			   zip: '87885',
			   lon: 0,
			   lat: 0
		       },
		       capacity: 100
                   },
		   {
		       name: 'Event 2',
		       description: 'The first event',
		       date: '2016.01.02',
		       time: '2:00 PM',
		       duration: '2 hour',
		       location: {
			   streetAddr: '101 Main St',
			   city: 'Los Angeles',
			   state: 'California',
			   zip: '87885',
			   lon: 0,
			   lat: 0
		       },
		       capacity: 200
		   },
		   {
		       name: 'Event 3',
		       description: 'The first event',
		       date: '2016.01.03',
		       time: '1:00 PM',
		       duration: '3 hour',
		       location: {
			   streetAddr: '101 Main St',
			   city: 'Los Angeles',
			   state: 'California',
			   zip: '87885',
			   lon: 0,
			   lat: 0
		       },
		       capacity: 300
		   },
		   {
		       name: 'Event 4',
		       description: 'The first event',
		       date: '2016.01.04',
		       time: '1:00 PM',
		       duration: '1 hour',
		       location: {
			   streetAddr: '101 Main St',
			   city: 'Los Angeles',
			   state: 'California',
			   zip: '87885',
			   lon: 0,
			   lat: 0
		       },
		       capacity: 400
		   }];
		   

dbRouter.route('/AddEventData')
    .get(function(req, res) {
	var url = 'mongodb://localhost:27017/eventsApp';
	mongodb.connect(url, function(err, db) {
	    var collection = db.collection('events');

	    collection.insertMany(eventsData, function(err, results){
		res.send(results);
		db.close();
	    });
	});
    });

module.exports = dbRouter;

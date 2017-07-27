var MongoClient = require('mongodb').MongoClient;

var dburl = 'mongodb://localhost:27017/meanhotel';	//Connection string

var _connection = null;

var open = function() {
	MongoClient.connect(dburl, function(err, db){
		if(err) {
			console.log("Connection to the database failed");
			return;
		}
		_connection = db;
		console.log("Connection established successfully", db);
	});
};

var get = function() {
	return _connection;
};

module.exports = {
	open : open,
	get : get
};
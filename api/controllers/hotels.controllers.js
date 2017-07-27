var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


module.exports.hotelsGetAll = function(req, res){

	var offset = 0;
	var count = 5;

	if(req.query && req.query.offset){
		var offset = parseInt(req.query.offset);
	}

	if(req.query && req.query.count){
		var count = parseInt(req.query.count);
	}

	Hotel
		.find()
		.skip(offset)
	 	.limit(count)
		.exec(function(err, hotels){
			console.log('Hotels found : ', hotels.length);
			res
				.status(200)
				.json(hotels);
		});

}

module.exports.hotelsGetOne = function(req, res){

	var hotelId = req.params.hotelId;

	Hotel
		.findById(hotelId)
		.exec(function(err, hotel){
				res
					.status(200)
					.json(hotel);
		});

	console.log("GET hotelId "+hotelId);
	
}


module.exports.hotelsAddOne = function(req, res){

	var db = dbconn.get();
	var collection = db.collection("hotels");
	var newHotel;

	if(req.body && req.body.name && req.body.stars) {
		newHotel = req.body;
		newHotel.stars = parseInt(req.body.stars);

		// Inserting the document into the collection
		collection
			.insertOne(newHotel, function(err, response) {
				console.log(response.ops);
				res
					.status(201)
					.json(response.ops);
			});

	} else {
		console.log("Data missing from the body");
		res
			.status(400)
			.json({ "message" : "Data missing from the body" });
	}

}
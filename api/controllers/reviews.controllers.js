var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


// GET all reviews for a hotel
module.exports.reviewsGetAll = function(req, res){

	var hotelId = req.params.hotelId;

	Hotel
		.findById(hotelId)
		.select('reviews')
		.exec(function(err, hotel){
				res
					.status(200)
					.json(hotel.reviews);
		});

	console.log("GET hotelId "+hotelId);

};

// GET a specific review for a hotel
module.exports.reviewsGetOne = function(req, res) {
	
	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;

	Hotel
		.findById(hotelId)
		.select('reviews')
		.exec(function(err, hotel){
			var review = hotel.reviews.id(reviewId);
				res
					.status(200)
					.json(review);
		});

	console.log("GET hotelId "+hotelId);
};



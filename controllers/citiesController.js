//Importing models
const db = require("../models");

// Defining methods for the citiesController
module.exports = {
	// Finds and returns all cities
	findAll: function(req, res) {
	    
		db.City.find(req.query)			
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	// Finds a particular city and returns that city with data from notes populated
	findByName: function(req, res) {
		db.City.find({name: req.params.name })
			.populate("notes")
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	// Gets a random selection of cities to be used for the game route
	getRandomRoute: function(req, res) {
		
		let number = parseInt(req.params.number)
		db.City.aggregate( [ { $sample: {size: number} } ] )  
		
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	}
	
	
};
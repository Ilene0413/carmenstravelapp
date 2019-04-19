//Importing models
const db = require("../models");


// Defining methods for the citiesController
module.exports = {
	findAll: function(req, res) {
	    
		db.City.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	findByName: function(req, res) {
		db.City.find({name: req.params.name })
			.populate("notes")
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	getRandomRoute: function(req, res) {
		console.log("getRandomRoute: number: " + req.params.number);
		let number = parseInt(req.params.number)
		db.City.aggregate( [ { $sample: {size: number} } ] )  
		
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	
	
};
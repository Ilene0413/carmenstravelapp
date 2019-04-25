//Importing models

const db = require("../models");



// Defining methods for the notesController

module.exports = {

	findAll: function (req, res) {

		db.Note.find(req.query)

			.sort({ date: -1 })

			.then(dbModel => res.json(dbModel))

			.catch(err => res.json(err));

	},
	findMyNotes: function (req, res) {
		db.Note.find( {username: req.params.name})
			.sort({ date: -1 })
			.then(dbModel=> res.json(dbModel))
			.catch(err => res.json(err));
	},



	create: function (req, res) {
		console.log("In create note")

		db.Note.create(req.body)

			.then(function (dbNote) {

				return db.City.findOneAndUpdate({ name: req.params.name }, { $push: { notes: dbNote._id } }, { new: true });
			})
			.then(dbModel => res.json(dbModel))

			.catch(err => res.json(err));

	}



};
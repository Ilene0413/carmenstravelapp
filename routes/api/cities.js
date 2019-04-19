// Dependencies
const router = require("express").Router();
const citiesController = require("../../controllers/citiesController");

// Matches with "/api/cities"
router.route("/")
	.get(citiesController.findAll);
	


// Matches with "/api/cities/:name"
router.route("/:name")
	.get(citiesController.findByName);

// Matches with "/api/cities/route/:number"
router.route("/route/:number")
	.get(citiesController.getRandomRoute);
	



// Exporting
module.exports = router;
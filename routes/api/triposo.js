// Dependencies
const router = require("express").Router();
const triposoController = require("../../controllers/triposoController");



// Matches with "/api/triposo/poi:name"
router.route("/poi/:name")
	.get(triposoController.retrievePOI);

// Matches with "/api/triposo/eatout:name"
router.route("/eatout/:name")
	.get(triposoController.retrieveRestaurants);

// Matches with "/api/triposo/nightlife:name"
router.route("/nightlife/:name")
	.get(triposoController.retrieveNightlife);
	

// Exporting
module.exports = router;
// Dependencies
const router = require("express").Router();
const triposoController = require("../../controllers/triposoController");



// Matches with "/api/triposo:name"
router.route("/:name")
	.get(triposoController.retrievePOI);
	

// Exporting
module.exports = router;
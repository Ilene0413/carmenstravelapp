// Dependencies
const router = require("express").Router();
const pexelController = require("../../controllers/pexelController");


// Matches with "/api/pexels:name"
router.route("/:name")
	.get(pexelController.retrieveImage);
	

// Exporting
module.exports = router;

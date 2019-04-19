// Dependencies
const router = require("express").Router();
const ttsController = require("../../controllers/ttsController");



// Matches with "/api/googletts:text"
router.route("/:text")
	.get(ttsController.convert_tts);
	

// Exporting
module.exports = router;
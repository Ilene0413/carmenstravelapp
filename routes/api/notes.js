// Dependencies

const router = require("express").Router();

const notesController = require("../../controllers/notesController");



// Matches with "/api/notes"

router.route("/")

	.get(notesController.findAll);
	
router.route("/:name")
    .get(notesController.findMyNotes)
	.post(notesController.create);



// Exporting

module.exports = router;
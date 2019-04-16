// Dependencies
const router = require("express").Router();
const cityRoutes = require("./cities");
const userRoutes = require("./users");
const noteRoutes = require("./notes");
const pexelRoutes = require("./pexels");
const triposoRoutes = require("./triposo");
const googlettsRoutes = require("./googletts");

// Item routes
router.use("/cities", cityRoutes);
router.use("/users", userRoutes);
router.use("/notes", noteRoutes);
router.use("/pexels", pexelRoutes);
router.use("/triposo", triposoRoutes);
router.use("/googletts", googlettsRoutes);


//Exporting
module.exports = router;
// Importing models

const db = require("../models");



// Defining methods for the usersController

module.exports = {

    findAll: function (req, res) {

        db.User.find(req.query)

            .sort({ name: 1 })

            .then(dbModel => res.json(dbModel))

            .catch(err => res.json(err));

    },
    findByName: function (req, res) {
        db.User.find({ userid: req.params.name })
            .then(dbModel => {
                // console.log(dbModel)
                res.json(dbModel)
            })

            .catch(err => res.json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ userid: req.params.name }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));

    },

    create: function (req, res) {

        db.User.create(req.body)

            .then(dbModel => res.json(dbModel))

            .catch(err => res.json(err));

    }

};
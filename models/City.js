var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var CitySchema = new Schema({
  // `headline` is required and of type String. It must be unique
  name: {
    type: String,
    index: {unique: true, dropDups: true},
    required: true
  },
  summary: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  places: [{
    type: String,
    required: true
  }],
  clues: [{
    type: String,
    required: true

  }],
  cardimages: [{
    type: String
  }],
  choices: [{
    type: String,
    required: true
  }],


  // `notes` is an array that stores Note ids
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]

});

// This creates our model from the above schema, using mongoose's model method
var City = mongoose.model("City", CitySchema);

// Export the Article model
module.exports = City;
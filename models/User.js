var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `userid` is of type String
  userid: {
    type: String,
    index: {unique: true, dropDups: true},
    required: true
  },
  username: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 }
  
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;

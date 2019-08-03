var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Document Model
var CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: "Firstname is required",
    unique: true
  },
  lastName: {
    type: String,
    required: "Lastname is required"
  },
  dob: {
    type: Date
  },
  age: {
    type: Number
  },
  address: {
    type: String
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);

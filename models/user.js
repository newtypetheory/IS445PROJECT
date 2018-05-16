
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
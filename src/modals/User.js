const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
  name: String,
  password: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);
model.exports = { User };

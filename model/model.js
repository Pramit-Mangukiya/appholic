const mongoose = require("mongoose");

const Register = new mongoose.model("Register", {
  full_name: String,
  email: String,
  password: String,
  retype_password: String,
  otp: Number,
});

module.exports = Register;

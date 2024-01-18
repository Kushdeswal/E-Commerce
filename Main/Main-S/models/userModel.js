const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require('dotenv').config()
const SALT_FACTOR = process.env.SALT_FACTOR;


let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    allowNull: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  type:{
   type:String,
   required:true,
   allowNull:true,
   default:"user", 
  },
  // created_At:{
  //   type:Date,
  //   default:Date.now(),
  // }
},{timestamps:true});

// bcrypt password====

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});



const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require('dotenv').config()

let userSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      lowercase: true,
    },
    user_email: {
      type: String,
      required: true,
      lowercase: true,
    },
    user_password: {
      type: String,
      required: true,
      lowercase: true,
    },
    },
  { timestamps: true }
);

userSchema.pre("save",async function (next) {
    const user = this;
  console.log("model user==>",user);
  console.log("model user password==>",user.user_password);
    try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.user_password, salt);
    user.user_password = hash;
    console.log("model hass password==>",user);
    next();
  } catch (err) {
    next(err);
  }
  });
  
  
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;

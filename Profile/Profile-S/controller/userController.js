const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// create user api=====
// http://localhost:5500/user/createUser
const createUser = async (req, res) => {
  const user = req.body;
  console.log("user==>", user);
  const newUser = new userModel(user);
  console.log("newUser==>", newUser);
  try {
    await newUser.save();
    return res.status(201).json({
      message: "User created Succesfully",
      result: newUser,
    });
  } catch (err) {
    console.log("reaching inside catch");
    return res.status(500).json({
      message: err.message,
    });
  }
};


// login new user==========
// http://localhost:5500/user/loginUser
const loginUser = async (req, res) => {
  const email = req.body.user_email;
  const password = req.body.user_password;
  const id=req.body.user_id;
  console.log(email, password);

  try {
    const user = await userModel.findOne({
      user_email: email,
      user_id:id,
    });

    console.log("email match", user);

    if (!user) {
      return res.status(404).json({
        message: "User Not Exist",
      });
    }

    const chackPassword = user.user_password === password;

    console.log("chackPassword==>", chackPassword);

    if (!chackPassword) {
      res.status(500).json({
        message: "invalid credentials",
      });
    } else {
      const token = jwt.sign(
        { user_email: user.user_email },
        process.env.secret_key,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        message: "login succsessfuly",
        token: token,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// find user=====
// http://localhost:5500/user/findUser
const findUser = async (req, res) => {
  try {
    const finddata = await userModel.find({});
     
    if (!finddata.length) {
      return res.status(404).json({
        message: "No user in db ",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      result: finddata,
      count: finddata.length,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};


module.exports = {
  createUser,
  loginUser,
  findUser
};

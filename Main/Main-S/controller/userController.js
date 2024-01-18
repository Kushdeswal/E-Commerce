const userModel = require("../models/userModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require('dotenv').config()
const SECRET_KEY =process.env.SECRET_KEY;
const SALT_FACTOR = process.env.SALT_FACTOR;


// user create api=====
// http://localhost:6000/user/create-user
const createUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const email =req.body;
  const newUser = new userModel(user);
  try {
        // email validation
        //  const allRecord=await userModel.find({});
        // const isExist=allRecord.filter((item)=>item.email ===email)
        // if(isExist.length > 0){
        //   return res.status(201).json({
        //     message: "Email Already Exist",
        //   });
        // }

    await newUser.save();
    return res.status(201).json({
      message: "User Created Succesfully",
      result: newUser,
    });

  } catch {
    return res.status(500).json({
      message: "User Created Unsuccesfully",
    });
  }
};

// user get api=============
// http://localhost:6000/user/get-user
const getUser = async (req, res) => {
  try {
    const user = await userModel.find({});

    if (!user.length) {
      return res.status(404).json({
        message: "No user in db ",
      });
    }
    const userAdmin = user.filter((user) => {
      return user.type === "admin";
    });

    const userUser = user.filter((user) => {
      return user.type === "user";
    });

    return res.status(200).json({
      message: "User fetched successfully",
      admin: userAdmin,
      user: userUser,
      // AllUsers:user,
      adminCount: userAdmin.length,
      userCount: userUser.length,
      count: user.length,
    });
  } catch (err) {
    console.log("err", err.message);
  }
};

// user update api ============
// http://localhost:6000/user/update-user/:id
const updateUser = async (req, res,next) => {
  const id = req.params.id;
  const User = req.body;
  try {
    if(User.password !=" "){
      bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) return next(err.message);
            bcrypt.hash(User.password, salt, function (err, hash) {
          if (err) return next(err.message);
            User.password = hash;
        });
      });
    }

    const findUser = await userModel.findOne({
      _id: id,
    });

    if (!findUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const result = await userModel.findByIdAndUpdate(id, User, {
      new: true,
    });

    return res.status(200).json({
      message: "User edit successfully",
      result: User,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// user delete api ============
// http://localhost:6000/user/delete-user/:id
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const findUser = await userModel.findOne({
      _id: id,
    });
    //validation-------
    if (!findUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const result = await userModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "user delete successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

//login user ==============
const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userModel.findOne({
      email: email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User Not Exist",
      });
    }

    const chackPassword = user.password === password;
    if (!chackPassword) {
      res.status(500).json({
        message: "invalid credentials",
      });
    } else {
      const token = jwt.sign({email:user.email}, SECRET_KEY, { expiresIn: "1m" });

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

module.exports = { createUser, getUser, updateUser, deleteUser, loginUser };








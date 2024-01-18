const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY =process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    return res.status(403).send({ message: "User not authorized" });
  }
};

// const checkAdmin = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const key = jwt.verify(token, SECRET_KEY);
//     const user = await userModel.findOne({
//       email: key.email,
//     });
//     if (user.type === "admin") {
//       next();
//     }
//   } catch (err) {
//     return res.status(403).send({ message: "Uhh are not admin" });
//   }
// };

module.exports = checkAuth;

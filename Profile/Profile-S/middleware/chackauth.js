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




module.exports = checkAuth;
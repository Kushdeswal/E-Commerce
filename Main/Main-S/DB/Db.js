const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

const port = process.env.Port || 6600;
const DB_URL =process.env.DB_URL;


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    app.listen(port, () => {
      console.log(`server start on ${port}`);
      console.log("db connect succesfully");
    });
  }).catch((err) => {
    console.log("db connectt unsuccesfully");
    console.log("error==>",err.message);
  });
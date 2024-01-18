const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.Port || 6600;
const DB_URL = process.env.DB_URL;

const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");

app.use(bodyParser.json({ extended: true, limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/product", productRoutes);

// Database require===
// require("./DB/Db");

//======
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server start on ${port}`);
      console.log("db connect succesfully");
    });
  })
  .catch((err) => {
    console.log("db connectt unsuccesfully");
    console.log("error==>", err.message);
  });

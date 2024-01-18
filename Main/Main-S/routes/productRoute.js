const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const {
  creatProduct,
  getAllProducts,
  updateProducts,
  deleteProducts,
} = require("../controller/productController");


router.post("/create-product", creatProduct);
router.get("/get-product", getAllProducts);
router.patch("/update-product/:id", updateProducts);
router.delete("/delete-product/:id", deleteProducts);

module.exports = router;

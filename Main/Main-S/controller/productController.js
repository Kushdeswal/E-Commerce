const ProductModel = require("../models/productModel");

// post api===================
// http://localhost:6000/product/create-product
const creatProduct = async (req, res) => {
  const product = req.body;
    const newProduct = new ProductModel(product);
  try {
    await newProduct.save();
    return res.status(201).json({
      message: "Product created successfully",
      result: newProduct,
    });
  } catch (err) {
    console.log("err", err.message);
  }
};
 
  
// get api================
// http://localhost:6000/product/get-product
const getAllProducts = async (req, res) => {
  try {
    const product = await ProductModel.find({});
    if (!product.length) {
        return res.status(404).json({
            message: "No user in db ",
          });
    }
    return res.status(200).json({
      message: "Product fetched successfully",
      result: product,
      count:product.length,
    });
  } catch (err) {
    console.log("err", err.message);
  }
};

//edit api===========
// http://localhost:6000/product/update-product/64ea901c894b344b38a316e0
const updateProducts = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  try {
    const findProduct = await ProductModel.findOne({
      _id: id,
    });
    if (!findProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const result = await ProductModel.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    return res.status(200).json({
      message: "Product edit successfully",
      result: updateProduct,
          });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

//delete api===========
// http://localhost:6000/product/delete-product/64ea901c894b344b38a316e0
const deleteProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const findProduct = await ProductModel.findOne({
      _id: id,
    });
    //validation-------
    if (!findProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await ProductModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Product delete successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

module.exports = {
  creatProduct,
  getAllProducts,
  updateProducts,
  deleteProducts,
};

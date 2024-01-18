const express = require("express");
const router = express.Router();
const { createUser,getUser,updateUser,deleteUser,loginUser} = require('../controller/userController');
const checkAuth =require("../middleware/checkAuth")
// const userValidation=require("../validators/userValidation")

router.post("/create-user",createUser);
router.get("/get-user",checkAuth,getUser);
router.patch("/update-user/:id",updateUser);
router.delete("/delete-user/:id",deleteUser);
router.post("/login-user",loginUser);


module.exports=router;

const express = require("express");
const router= express.Router();
const {createUser,loginUser,findUser}=require("../controller/userController")
// const checkAuth=require("../middleware/chackauth")

router.post("/createUser",createUser);
router.post("/loginUser",loginUser);
router.get("/findUser",findUser);
module.exports=router;
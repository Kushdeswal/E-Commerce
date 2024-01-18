const express = require("express");
const bodyParser =require("body-parser");
const mongoose =require("mongoose");
const cors =require("cors");
const app=express();

require("dotenv").config();

app.use(bodyParser.json({extended:true,limit:"5mb"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const port = process.env.PORT
const DB_URL = process.env.DB_URL;

const userRouter=require("./routes/userRoutes")
app.use("/user",userRouter);

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(port,()=>{
        console.log(`server start running on port ${port}`);
    })
}).catch((err)=>{
    console.log(err)
});
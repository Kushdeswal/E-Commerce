
const userValidation =(req,res,next)=>{
    try{
         const{name,phone,email,password}=req.body;
         if(!name) return res.send("name validation field is required");
         else if(!phone) return res.send("name validation field is required");
         else if(!email) return res.send("name validation field is required");
        else if(!password) return res.send("name validation field is required");
        else next();

    }catch(err){
        return res.status(500).json({
            message: "plz enter input field",
          });
    }
}

module.exports=userValidation
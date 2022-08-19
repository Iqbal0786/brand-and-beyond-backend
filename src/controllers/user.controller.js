const express= require("express");
const router= express.Router();
const User= require("../models/user.model");
router.get("",async(req,res)=>{
    try {
        const users= await User.find().lean().exec();
     return   res.send(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports=router;
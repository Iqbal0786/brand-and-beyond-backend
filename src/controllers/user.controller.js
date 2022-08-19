const express= require("express");
const authenticate = require("../middlewares/authenticate");
const authorization = require("../middlewares/authorization");
const router= express.Router();
const User= require("../models/user.model");
router.get("", authenticate,authorization(["admin"]), async(req,res)=>{
    try {
        const users= await User.find().select("email roles createdAt").lean().exec();
     return   res.send(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports=router;
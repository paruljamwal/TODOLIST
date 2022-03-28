const usermodel=require("../model/usermodel");
const express=require("express");
const { body, ValidationResult } = require('express-validation')
const router=express.Router();

//register 

//post user

router.post("", 

body(firstName).not().isEmpty().withMessage("please enter your name").bali(),
body(lasttName).not().isEmpty().withMessage("please enter your lastname").bali(),
body(email).not().isEmpty().withMessage("please enter your email").bali(),
body(password).not().isEmpty().withMessage("please enter your password").bali()


,async(req,res)=>{
    try{
        const error=ValidationResult(req);
        if(err){
            throw new error("Please check your crediantials");
        }
        const registeruser=await usermodel.create(req.body); 
       return res.status(201).send(registeruser);
    }
    catch(err){
        return res.status(401).send("Smothing wrong");
    }
})



//get register user


router.get("",async(req,res)=>{
    try{
        const registeruser=await usermodel.find({}).lean().exec(); 
       return res.status(201).send(registeruser);
    }
    catch(err){
        return res.status(401).send("Smothing wrong");
    }
});





module.exports=router;


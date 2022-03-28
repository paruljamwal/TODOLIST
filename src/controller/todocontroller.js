const todomodel=require("../model/todomodel");
const express=require("express");
const router=express.Router();


router.get("",async(req,res)=>{
    try{
        const todouser=await todomodel.find({}).lean().exec();
        return res.status(201).send({todouser:todouser});
    }
    catch(err){
        return res.status(404).send("Somthing went wrong");
    }
});


// post

router.post("",async(req,res)=>{
    try{
        const todouser=await todomodel.create(req.body);
        return res.status(201).send({todouser:todouser});
    }
    catch(err){
        return res.status(404).send("Somthing went wrong");
    }
});

//get single user

router.get("/:id",async(req,res)=>{
    try{
        const todouser=await todomodel.findById(req.params.id,{new:true}).lean().exec();
        return res.status(201).send({todouser:todouser});
    }
    catch(err){
        return res.status(401).send("Somthing went wrong");
    }
});

//update user list


router.patch("/:id",async(req,res)=>{
    try{
        const todouser=await todomodel.findByIdAndUpdate(req.params.id,req.body).lean().exec();
        return res.status(201).send({todouser:todouser});
    }
    catch(err){
        return res.status(401).send("Somthing went wrong");
    }
});

// delete todo list;


router.delete("/:id",async(req,res)=>{
    try{
        const todouser=await todomodel.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({todouser:todouser});
    }
    catch(err){
        return res.status(401).send("Somthing went wrong");
    }
});







module.exports=router;

const commentmodel=require("../model/comments");
const express=require("express");
const router=express.Router();


router.get("",async(req,res)=>{
    try{
        const usercommnet=await commentmodel.find({}).lean().exec();
        return res.status(201).send({usercomment:usercommnet});
    }
    catch(err){
        return res.status(404).send("Somthing went wrong");
    }
});


// post

router.post("",async(req,res)=>{
    try{
        const usercomment=await commentmodel.create(req.body);
        return res.status(201).send({user:usercomment});
    }
    catch(err){
        return res.status(404).send("Somthing went wrong");
    }
});

//get single user

router.get("/:id",async(req,res)=>{
    try{
        const usercomment=await todomodel.findById(req.params.id,{new:true}).lean().exec();
        return res.status(201).send({usercomment:usercommnet});
    }
    catch(err){
        return res.status(401).send("Somthing went wrong");
    }
});

//update user list


router.patch("/:id",async(req,res)=>{
    try{
        const usercomment=await todomodel.findByIdAndUpdate(req.params.id,req.body).lean().exec();
        return res.status(201).send({usercomment:usercommnet});
    }
    catch(err){
        return res.status(401).send("Somthing went wrong");
    }
});

// delete todo list;


router.delete("/:id",async(req,res)=>{
    try{
        const usercomment=await todomodel.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({usercomment:usercommnet});
    }
    catch(err){
        return res.status(401).send("Somthing went wrong");
    }
});







module.exports=router;

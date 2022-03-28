const { default: mongoose } = require("mongoose");

 

 const userschema= new mongoose.Schema({
     firstName:{type:String,required:true},
     lastName:{type:String},
     email:{type:String,required:true},
     password:{type:String,required:true}

 },
 {
     timestamps:true,
     versionKey:false
 });


 const usermodel=mongoose.model("user",userschema);
 module.exports=usermodel;
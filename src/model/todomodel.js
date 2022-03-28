const { default: mongoose } = require("mongoose");

 

 const todoschema= new mongoose.Schema({
     title:{type:String,required:true}
     

 },
 {
     timestamps:true,
     versionKey:false
 });


 const todomodel=mongoose.model("todo",todoschema);

 module.exports=todomodel;
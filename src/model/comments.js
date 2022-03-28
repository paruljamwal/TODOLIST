const { default: mongoose } = require("mongoose");

 

 const commentschema= new mongoose.Schema({
     title:{type:String,required:true}
     

 },
 {
     timestamps:true,
     versionKey:false
 });


 const commentmodel=mongoose.model("comment",commentschema);

 module.exports=commentmodel;
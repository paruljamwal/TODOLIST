const mongoose=require("mongoose");


const connect=()=>{
    try{
 console.log("I am connected");
 return mongoose.connect("mongodb+srv://parul:paru@cluster0.fcq2i.mongodb.net/todolist?retryWrites=true&w=majority")
    }
    catch(err){
console.log(err);
    }
}

module.exports=connect;
const app=require("./index");
const connect=require("./config/db");

app.listen(5151,async(req,res)=>{
    try{
        console.log("Listining port no 5151");
        return  await connect();

    }
    catch(err){
       return res.status(404).send("Somthing went wrong please try after some time");
    }
})
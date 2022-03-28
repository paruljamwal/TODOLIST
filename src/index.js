const express=require("express");
const register=require("./controller/usercontroller");
const login=require("./controller/usercontroller");
const commentcontroller=require("./controller/commentscontroller");

const todocontroller=require("./controller/todocontroller");
const app=express();

app.use(express.json());
app.use("/register",register);
app.use("/login",login);
app.use("/todos",todocontroller);
app.use("/comment",commentcontroller);


module.exports=app;
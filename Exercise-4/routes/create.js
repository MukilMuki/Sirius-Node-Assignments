let express = require('express');
let router=express.Router();
let port = 4000;


app.use("/nickname",(req,res)=>{
    res.send("Nickname route");
});

app.use("/age",(req,res)=>{
    res.send("Age route");
})

app.use("/phone",(req,res)=>{
    res.send("phone route");
})

app.use("/dob",(req,res)=>{
    res.send("dob route");
})

app.use("/",(req,res)=>{
    res.send("Base create route");
});

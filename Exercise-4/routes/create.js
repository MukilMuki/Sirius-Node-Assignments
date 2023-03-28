let express = require('express');
let router=express.Router();
let port = 4000;

let nicknameController=require('../controllers/nicknameController');

app.get("/nickname",nicknameController);

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

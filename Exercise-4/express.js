let express = require('express');
let app= express();
let port = 4000;


app.use("/create",(req,res)=>{
    res.send("Create route");
});

app.use("/read",(req,res)=>{
    res.send("Read route");
})

app.use("/update",(req,res)=>{
    res.send("Update route");
})

app.use("/delete",(req,res)=>{
    res.send("Delete route");
})

app.use("/",(req,res)=>{
    res.send("Base route");
});
// app.get();
// app.post();
// app.put();
// app.delete();
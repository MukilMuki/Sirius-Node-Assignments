let express = require('express');
let app= express();
let port = 4000;

let create=require('./routes/create')
app.use("/create", create);

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
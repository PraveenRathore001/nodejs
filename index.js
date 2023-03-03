const env = require("dotenv").config();
const express = require('express')

// const mongoose=require('mongoose');
// mongoose.set('strictQuery', true);
const app = express();

// mongoose.connect(process.env.url).then(()=>{
//     console.log("mongoose connected successfully");
// }).catch((err)=>{
//     console.log("hii not connected")
// })
// const routerdata = require('./routes/Routess');
// app.use('/',routerdata)



app.listen(process.env.port,()=>{
    console.log(`listening on port ${process.env.port}`);
})
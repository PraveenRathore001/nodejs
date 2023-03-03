const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const userRoutes = require('./routes/userRoute')
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL).then(()=>{
console.log('Connect to Mongo successfully')
}).catch((err)=>{
    console.log(`Error is ${err}`)
})


const app=express();
app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user',userRoutes);

app.listen(process.env.port,() =>{
    console.log(`app listening on port ${process.env.port}`);
})

const mongoose = require('mongoose')
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('papa',userschema);
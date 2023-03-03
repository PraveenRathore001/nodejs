const userInfo = require('../model/userSchema')







const userdetails=async(req,res)=>{
    console.log("hiiii")
const data = new userInfo(req.body);
let result= await data.save();
res.send(result);
}








module.exports = userdetails
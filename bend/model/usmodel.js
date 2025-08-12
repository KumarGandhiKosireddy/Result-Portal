let express=require("express")
let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
     "_id":String,
     "name":String,
     "dob":Date,
     "gen":String,
     "phno":String,
     "email":String,
     "photo":String,
     "tel":Number,
     "hin":Number,
     "eng":Number,
     "math":Number,
     "sc":Number,
     "ss":Number
})
let um=mongoose.model("um",usersch)
module.exports=um
let bcrypt=require('bcrypt')
const am = require('../model/admodel')
let jwt=require("jsonwebtoken")
let reg=async(req,res)=>{
     try {
          let pwdhash=await bcrypt.hash(req.body.pwd,10)
          let data= new am({...req.body,"pwd":pwdhash})
          await data.save()
          res.send("reg done")
     } catch (error) {
          console.log(error);
          
          res.send("err in reg")
     }
}

let login=async(req,res)=>{
     try{
          let obj= await am.findById(req.body._id)
          if(obj){
               let f=await bcrypt.compare(req.body.pwd,obj.pwd)
               if(f){
                    res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"name":obj.name})
               }
               else{
                    res.json({err:"check password"})
               }
          }
          else{
               res.json({err:"check email"})
          }
     } 
     catch (err) {

          res.send({err:"err in login"})
          console.log(err);
          
     }    
}

let isLogin=async (req,res,next)=> {
     try {
          jwt.verify(req.headers.authorization,'abcd')  
             next()
     } catch (err) 
     {
          res.json({"msg":"Please Login"})
     }
     
}
module.exports={reg,login,isLogin}
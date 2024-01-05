const express = require("express");
const app =express()

const mong=require("mongoose")
const cors =require("cors")
app.use(cors())
app.use(express.json())
mong.connect("mongodb+srv://mostafabakeer:wcetYuP8yQRwIPrc@cluster.282if3b.mongodb.net/test?retryWrites=true&w=majority")
 const Schema=new mong.Schema({
     
        name:String,
       number:String,
 })
 
 const Userr=mong.model("car",Schema)
app.get("/",async(q,s)=>{
         
    await Userr.find({}).then( (user)=>{
        s.json(user)
        
     }).catch( (err)=>{
        console.log(err)
     })
     
})
app.post("/",async(q,s)=>{
       
    const datat= q.body;
    const newuser=await new Userr(datat)
   const result= await newuser.save()
   s.send(result)
    s.json(result)
 
// console.log(q.body); 
     
})
app.listen("3001",()=>{ 
    console.log("mostafa");
}) 
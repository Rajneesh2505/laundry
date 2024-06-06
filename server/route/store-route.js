const express=require("express")
const route=express.Router()
const storeModel=require("../models/store-schema")
let id=0
route.post("/store-address",(req,res)=>{
    storeModel.create({product_id:++id,location:req.body.location,storeaddress:req.body.storeaddress,phone:req.body.phone,customerAddress:req.body.customerAddress,date:new Date()}).then(data=>{
        res.status(200).send({
            status:"success",
            message:"store address added succcessfully"
        })
    }).catch(err=>{
        res.status(400).send({
            status:"fail",
            messsage:err
        })
    })
    id=++id
})

module.exports=route

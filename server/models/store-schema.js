const mongoose =require("mongoose")

const storeSchema=mongoose.Schema({
    product_id:{
        type:Number
    },
    location:{
        type:String
    },
    storeaddress:{
        type:String
    },
    phone:{
        type:String
    },
    customerAddress:{
        type:String
    },
    date:{
        type:String
    }
})

const store=mongoose.model("Stores",storeSchema)
module.exports=store
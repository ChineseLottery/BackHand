const { Double } = require("bson")
const mongoose=require("mongoose")

const orderShcema=new mongoose.Schema({
    id:Number,
    item_id:Number,
    item_name:String,
    item_descreption:String,
    price:Double
})

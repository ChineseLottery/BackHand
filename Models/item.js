const mongoose=require("mongoose")
const { stringify } = require("querystring")

const itemSchema=new mongoose.Schema({
    item_name:String,
    item_description:String,
    item_price:Number
})

const Item=mongoose.model("items",itemSchema);

module.exports={
    itemSchema,
    Item
}
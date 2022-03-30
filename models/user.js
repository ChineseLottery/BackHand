const mongoose = require("mongoose")

const orderShcema = new mongoose.Schema({
    item_id: Number,
    item_name: String,
    item_descreption: String,
    price: Number

})

const userSchema = new mongoose.Schema({
    // _id:Number,
    user_first_name: String,
    user_last_name: String,
    user_phone: { type: String },
    arr_orders: [orderShcema]
})

const User = mongoose.model("users", userSchema)
module.exports = {
    userSchema,
    User
}

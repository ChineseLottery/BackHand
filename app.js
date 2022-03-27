const express=require("express");
const mongoose=require("mongoose");
const itemRout=require("./routs/item")

const app=express();
mongoose.connect("mongodb://localhost:27017/ChineseLottery")
.then(()=>console.log("The connection was successful"))
.catch(err=>console.log(err))

app.use(express.json());
app.use("/item", itemRout);
app.listen(4500,()=>{console.log("waiting")})


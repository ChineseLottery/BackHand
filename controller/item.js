const Item=require("../models/item").Item;

const GetAllItems=async(req,res)=>{
    try{
        let all=await Item.find({});
        return res.send(all);
    }
    catch(e){
        return res.status(400).send(e);
    }
}
const GetItemById=async(req,res)=>{
    let id=req.params.id;
    try {
        let item=Item.findById(id);
        return res.send(item)
    }
    catch(e){
        return res.status(400).send(e);
    }
}
const AddItem= async(req,res)=>{
    try{
        let newItem=new Item(req.body)
        await newItem.save();
        return res.send(newItem);
    }
    catch(e){
        return res.status(400).send(e);
    }
}

const DeleteItem=async(req,res)=>{
    let id=req.params.id;
    try{
        let del=await Item.findByIdAndDelete(id);
        return res.send(del);
    }
    catch(e){
        return res.status(400).send(e);
    }
}

module.exports={
    GetAllItems,
    GetItemById,
    AddItem,
    DeleteItem
}
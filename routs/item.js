const router=require("express").Router();
const itemController=require("../controller/item.js");

router.get("/item",itemController.GetAllItems)
router.get("/item:id",itemController.GetItemById)
router.post("/addItem",itemController.AddItem)
router.delete("/deleteItem/:id",itemController.DeleteItem)

module.exports=router
const router=require("express").Router();
const itemController=require("../controlers/user.js");

router.get("/item",itemController.GetAllItems)
router.get("/item:id",itemController.GetItemById)
router.post("/item",itemController.AddItem)
router.post("/item",itemController.DeleteItem)

module.exports=router
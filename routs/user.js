const router=require("express").Router();
const userController=require("../controlers/user.js");

router.post("",userController.addUser)
router.get("/:id",userController.findOrdersByUserId)
router.post("",userController.addOrder)

module.exports=router;
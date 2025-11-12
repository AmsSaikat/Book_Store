const express=require("express")
const router=express.Router()
const {Signup,Signin}=require("../controller/user.controller")


router.post("/signup",Signup)
router.post("/login",Signin)

module.exports=router



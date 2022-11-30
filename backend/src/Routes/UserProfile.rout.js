const {Router}=require("express")
const { UserModel } = require("../models/User.model")

const UserProfileRouter=Router()

UserProfileRouter.get("/:userid",async(req,res)=>{
const {userid}=req.params

const UserData=await UserModel.findById(userid)

if(UserData){
    res.send(UserData)
}else{
    res.send({msg:"User Not Found please Check id!!"})
}


})

module.exports={UserProfileRouter}
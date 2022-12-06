const mongoose=require("mongoose")
const { GetCurrentDate, GetCurrentTime } = require("../Utils/DateFormat")

const GetCurrentDateval=GetCurrentDate()
const GetCurrentTimeval=GetCurrentTime()
console.log(GetCurrentDate)
const FeedsSchema=new mongoose.Schema({
title:{type:String,required:true},
imagepath:{type:String,required:true},
description:{type:String,required:true},
tags:[String],
user_id:{type:String,required:true},
postCreatedDate:{type:String,default:GetCurrentDateval},
postCreatedTime:{type:String,default:GetCurrentTimeval},

})
const FeedsModel=mongoose.model("Feed",FeedsSchema)

module.exports={FeedsModel}


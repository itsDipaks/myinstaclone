const mongoose=require("mongoose")
const FeedsSchema=new mongoose.Schema({
title:{type:String},
// img:{type:String},
description:{type:String},
tag:{type:String},
id:{type:String,required:true}
})
const FeedsModel=mongoose.model("Feed",FeedsSchema)

module.exports={FeedsModel}


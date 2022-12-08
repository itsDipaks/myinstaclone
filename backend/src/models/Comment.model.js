const mongoose=require("mongoose")
const { GetCurrentDate, GetCurrentTime } = require("../Utils/DateFormat")

const GetCurrentDateval=GetCurrentDate()
const GetCurrentTimeval=GetCurrentTime()
const CommentSchema=new mongoose.Schema({
commentdata:{type:String},
user_id:{type:String,required:true},
feed_id:{type:String,required:true},
commentTime:{type:String,default:GetCurrentTimeval},
commentDate:{type:String,default:GetCurrentDateval},
})
const CommentModel=mongoose.model("Comment",CommentSchema)

module.exports={CommentModel}
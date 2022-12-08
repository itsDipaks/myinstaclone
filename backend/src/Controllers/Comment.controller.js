const { CommentModel } = require("../models/Comment.model")

const Addcomment=(req,res)=>{
const {token,user_id}=req.headers
const data=req.body

try{
    const commentdatas=new CommentModel({
        commentdata:data,user_id,feeds_id
    })
}catch(err){

}

}



const CommentController={Addcomment}
module.exports={CommentController}
const {Router}=require("express")
const { CommentController } = require("../Controllers/Comment.controller")


const CommentRouter=Router()



CommentRouter.post("/",CommentController.Addcomment)

// CommentController.get("/:feed_id",)




module.exports={CommentRouter}
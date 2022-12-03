const {Router}=require("express")
const { FeedCRUDController } = require("../Controllers/FeedCRUDController.controller")
const { GetFeedsController } = require("../Controllers/GetFeed.controller")
const { Authenticate } = require("../middleware/Auth.middleware")

const FeedsRouter=Router()

FeedsRouter.post("/addpost",Authenticate,FeedCRUDController)


FeedsRouter.get("/allfeeds",GetFeedsController.GetallFeeds)


FeedsRouter.get("/userfeeds",Authenticate,GetFeedsController.GetUserFeeds)

FeedsRouter.delete("/userfeeds/:feedId",Authenticate,)


module.exports={FeedsRouter}
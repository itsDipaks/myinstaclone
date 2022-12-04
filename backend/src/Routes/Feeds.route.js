const {Router}=require("express")
const { FeedCRUDController } = require("../Controllers/FeedCRUDController.controller")
const { GetFeedsController } = require("../Controllers/GetFeed.controller")
const multer=require("multer")
const { Authenticate } = require("../middleware/Auth.middleware")

const FeedsRouter=Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,`${__dirname}/uploads`)
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
  
  const uploads = multer({ storage:storage})

FeedsRouter.post("/addpost",Authenticate,uploads.single("image"),FeedCRUDController.Addfeed)



FeedsRouter.get("/allfeeds",GetFeedsController.GetallFeeds)


FeedsRouter.get("/userfeeds",Authenticate,(req,res)=>{
    // const id=req.body.id
    console.log("id")
}
// GetFeedsController.GetUserFeeds
)

// FeedsRouter.delete("/userfeeds/:feedId",Authenticate,)



module.exports={FeedsRouter}
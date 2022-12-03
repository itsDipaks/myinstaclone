const {Router}=require("express")
const { FeedCRUDController } = require("../Controllers/FeedCRUDController.controller")
const { GetFeedsController } = require("../Controllers/GetFeed.controller")
const { Authenticate } = require("../middleware/Auth.middleware")
const multer=require("multer")

const FeedsRouter=Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./uploads")
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
  
  const uploads = multer({ storage: storage })

FeedsRouter.post("/addpost",uploads.single('image'),async(req,res)=>{
    const {title,description,tag}=req.body
    console.log(req.body)
    try{
        const postfeed=new FeedsModel({
            title,description,tag,id
        })
        await postfeed.save()
       res.send({msg:"Post Has been Created"})
    }catch(err){
    res.status(502).json({mag:"Something Wents wront please check filelds"})
    }
})


FeedsRouter.get("/allfeeds",GetFeedsController.GetallFeeds)


FeedsRouter.get("/userfeeds",Authenticate,GetFeedsController.GetUserFeeds)

// FeedsRouter.delete("/userfeeds/:feedId",Authenticate,)



module.exports={FeedsRouter}
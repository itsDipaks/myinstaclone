const { FeedsModel } = require("../models/Feeds.model")





const Addfeed=async (req,res)=>{
    let user_id=req.headers.user_id
    let {title,description,tags}= req.body
    let imagepath=`${__dirname}/../FeedsUplaods/${req.file.originalname}`
    // console.log(user_id)
    try{
        const postfeed=new FeedsModel({
            title,description,tags:tags.split(","),user_id,imagepath
        })
        await postfeed.save()
       res.send({msg:"Post Has been Created"})
    }catch(err){
    res.status(502).json({mag:"Something Wents wront please check filelds"})
    }
}


const Deletefeed=(req,res)=>{
    const {feedId}=req.params

}



const FeedCRUDController={Addfeed}

module.exports={FeedCRUDController}
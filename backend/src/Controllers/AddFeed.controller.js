const { FeedsModel } = require("../models/Feeds.model")

const Addfeed=async(req,res)=>{
    const {title,description,tag,id}=req.body
    try{
        const postfeed=new FeedsModel({
            title,description,tag,id
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
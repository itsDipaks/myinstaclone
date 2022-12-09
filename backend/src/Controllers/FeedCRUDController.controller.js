const { FeedsModel } = require("../models/Feeds.model")





const Addfeed=async (req,res)=>{
    let user_id=req.headers.user_id
    let {title,description,tags}= req.body
    let imagepath=req.file.originalname
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


const Deletefeed=async(req,res)=>{
    const post_id=req.params.post_id
const user_id=req.headers.user_id
try{
    const DeletedPost=await FeedsModel.findOneAndDelete({_id:post_id,user_id:user_id})

    if(DeletedPost.length>0){
        res.send({msg:"post Deleted Sucessss"})
    }
}catch(err){
    res.send({msg:"something wents wrong"})
}
}



const FeedCRUDController={Addfeed,Deletefeed}

module.exports={FeedCRUDController}
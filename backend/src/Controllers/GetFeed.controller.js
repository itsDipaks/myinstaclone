const { FeedsModel } = require("../models/Feeds.model")


const GetallFeeds=async(req,res)=>{
    try{
        const Allfeeds=await FeedsModel.find()
res.status(200).send(Allfeeds)
    }catch(err){
res.status(404).send({msg:"Not Found !!"})
    }
}




const GetUserFeeds=async(req,res)=>{
   const user_id=req.params.user_id;
   console.log(user_id)
    try{
        const Userfeeds=await FeedsModel.find({user_id})

        // const feedimage=Userfeeds.imagepath
        res.status(201).send(Userfeeds)
    }catch(error){
        res.status(404).json({msg:"Not Found !!",error})

    }
}

const GetFeedsController={GetallFeeds,GetUserFeeds}

module.exports={GetFeedsController}
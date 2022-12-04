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
    const {id}=req.body
    console.log(id)
    try{
        const Userfeeds=await FeedsModel.find({id})
        res.status(20).send(Userfeeds)
    }catch(error){
        res.status(404).send({msg:"Not Found !!"})

    }
   
}

const GetFeedsController={GetallFeeds,GetUserFeeds}

module.exports={GetFeedsController}
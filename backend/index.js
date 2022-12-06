const express=require("express")
const { connection } = require("./src/config/db")
const { AuthRouter } = require("./src/Routes/Auth.route")
const { UserProfileRouter } = require("./src/Routes/UserProfile.rout")
const cors=require("cors")
const { FeedsRouter } = require("./src/Routes/Feeds.route")
const app=express()



app.use(express.json())
app.use(cors())

app.use("/static",express.static(`${__dirname}/FeedsUploads`))
app.use("/auth",AuthRouter)
app.use("/profile",UserProfileRouter)
app.use("/feeds",FeedsRouter)

app.listen(8100,async()=>{ 
try{
   await connection;

   console.log("server started at http://localhost:8100")
}catch(err){
    console.log("Something wents wrong with server",err)
}
})
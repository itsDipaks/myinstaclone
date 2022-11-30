const express=require("express")
const { connection } = require("./src/config/db")
const { AuthRouter } = require("./src/Routes/Auth.route")
const { UserProfileRouter } = require("./src/Routes/UserProfile.rout")

const app=express()

app.use(express.json())



app.use("/auth",AuthRouter)
app.use("/profile",UserProfileRouter)



app.listen(8100,async()=>{ 
try{
   await connection;

   console.log("server started at http://localhost:8100")
}catch(err){
    console.log("Something wents wrong with server",err)
}
})
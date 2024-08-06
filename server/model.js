const mongoose=require("mongoose")

let modelData=new mongoose.Schema({
    name:String,
    email:String,
    phoneNo:Number,
    place:String,
    password:String
})

let userData=mongoose.model("Users",modelData)

module.exports=userData
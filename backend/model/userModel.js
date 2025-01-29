const mongoose = require("mongoose")
const schema = mongoose.Schema({
    username:String,
    pwd :String,
    email:String,
    contactno:String,
    bloodType:String,
    occupation:String,
    address:String,
    dob:Date,
    img:String
})
const user = new mongoose.model("user",schema);
module.exports = user;
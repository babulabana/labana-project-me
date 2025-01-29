const mongoose = require("mongoose")
const schema = mongoose.Schema({
    campname:String,
    place :String,
    date:Date,
    time:String,
    maxdonors:Number,    
})
const camp = new mongoose.model("camp",schema);
module.exports = camp;
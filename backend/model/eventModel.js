const mongoose = require("mongoose")
const schema = mongoose.Schema({    
    eventname:String,
    place :String,
    date:Date,
    time:String,
    maxlimit:Number,    
    category:String,
    imgpath:String
})
const event = new mongoose.model("event",schema);
module.exports = event;
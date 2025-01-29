const mongoose = require("mongoose")
const schema = mongoose.Schema({
    taskname:String,
    status :String
})
const task = new mongoose.model("task",schema);
module.exports = task;
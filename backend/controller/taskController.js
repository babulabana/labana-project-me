const taskModel = require("../model/taskModel")

exports.insertTask =async (t)=>
{
    let task = new taskModel(
        {
            taskname:t.name,
            status:'incomplete'
        }
    )
  let msg ="task not added"
   await task.save()
    .then(()=>msg="task added")
    return msg
    
}

exports.deleteTask = async (name)=>
{
    let t = {taskname:name}
    let msg = "task not delted"

    await taskModel.deleteOne(t).
    then(()=>msg = "task deleted ")
    return msg ;

}
exports.updateTask = async (name)=>
{
    let t  = {taskname:name}
    let s = {status:'complete'}

    let msg = "task status not updated";
    await taskModel.updateOne(t,{$set:s})
    .then(()=>msg = "record updated")
    return msg
}
exports.getalltasks =async ()=>
{
let data = await taskModel.find();
return data;
}
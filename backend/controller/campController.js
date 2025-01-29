const campModel = require("../model/campModel")

exports.insertcamp =async (t)=>
{
    let camp = new campModel(
        {
            campname:t.campname,
            place :t.place,
            date:t.date,
            time:t.time,
            maxdonors:t.maxdonors,   

        }
    )
  let msg ="camp not added"
   await camp.save()
    .then(async ()=>
    {
        let data = await campModel.find()
        msg={'message':"camp added",'campdata':data}
    })
    return msg    
}
exports.deletecamp = async (name)=>
{
    let t = {campname:name}
    let msg = "camp not delted"

    await campModel.deleteOne(t).
    then(()=>msg = "camp deleted ")
    return msg ;

}
exports.updatecamp = async (name)=>
{
    let t  = {campname:name}
    let s = {status:'complete'}

    let msg = "camp status not updated";
    await campModel.updateOne(t,{$set:s})
    .then(()=>msg = "record updated")
    return msg
}
exports.getallcamps =async ()=>
{
let data = await campModel.find();
return data;
}
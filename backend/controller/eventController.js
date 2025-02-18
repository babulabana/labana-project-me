const eventModel = require("../model/eventModel")

exports.insertevent =async (t,imgurl)=>
{
    let event = new eventModel(
        {
            eventname:t.eventname,
            place :t.place,
            date:t.date,
            time:t.time,
           
            maxlimit:t.maxlimit,    
              category:t.category,
              imgpath:imgurl

        }
    )
  let msg ="event not added"
   await event.save()
    .then(async ()=>
    {    let data = await eventModel.find();
       
        msg={'message':"event added",'eventdata':data}
    })
    return msg    
}



exports.updateevent =async (t)=>
{console.log("in update")
console.log("this is  in controller ")
    console.log("below is t")
    console.log(t)
    console.log("above is t")
    let eventdata = { eventname:t.eventname,
            place :t.place,
            date:t.date,
            time:t.time,
            maxlimit:t.maxlimit,    
             category:t.category,
             }
    
  let msg ="event not updated";
await eventModel.updateOne({_id:t.id},{$set:eventdata})
    .then(async ()=>
    {    let data = await eventModel.find();
       
        msg={'message':"event updated",'eventdata':data}
    })
    return msg    
}





exports.deleteevent = async (id)=>
{
    // let t = {"_id":"ObjectId("+id+")"}
    let msg = "event not delted"
    // console.log(t)
    await eventModel.findOneAndDelete({ _id: id })
    .then((d)=>{
        // console.log(d)
        msg = "event deleted "
    })
    return msg ;
}
// exports.updateevent = async (name)=>
// {
//     let t  = {eventname:name}
//     let s = {status:'complete'}

//     let msg = "event status not updated";
//     await eventModel.updateOne(t,{$set:s})
//     .then(()=>msg = "record updated")
//     return msg
// }
exports.getallevents =async ()=>
{
let data = await eventModel.find();
return data;
}
exports.getEventsbyCategory = async(categoryname)=>
{
    let data = await eventModel.find({category:categoryname});
return data;
}
exports.getEventById =async(eid)=>
{
    let data = await eventModel.find({_id:eid});
return data;
}
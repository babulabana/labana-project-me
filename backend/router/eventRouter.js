const express = require("express")
const router = express.Router();
const eventController = require("../controller/eventController");
router.post("/",upload.single('img'),async (req,res)=>
{
  let m =await eventController.insertevent(req.body,req.file.filename);
    res.send(m);
})


router.get("/", async (req,res)=>
{
    let d = await eventController.getallevents();
    res.send(d)
})
router.delete("/",async(req,res)=>
{
    let msg = await eventController.deleteevent(req.body.name)
    res.send(msg);
})
router.put("/",async(req,res)=>
{
    let msg = await eventController.updateevent(req.body.name)
    res.send(msg);
})
module.exports = router;
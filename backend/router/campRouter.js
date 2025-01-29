const express = require("express")
const router = express.Router();
const campController = require("../controller/campController");
router.post("/",async (req,res)=>
{
  let m =await campController.insertcamp(req.body);
    res.send(m);
})

router.get("/", async (req,res)=>
{
    let d = await campController.getallcamps();
    res.send(d)
})
router.delete("/",async(req,res)=>
{
    let msg = await campController.deletecamp(req.body.name)
    res.send(msg);
})
router.put("/",async(req,res)=>
{
    let msg = await campController.updatecamp(req.body.name)
    res.send(msg);
})
module.exports = router;
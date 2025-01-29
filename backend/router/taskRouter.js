const express = require("express")
const router = express.Router();
const taskController = require("../controller/taskController");
router.post("/",async (req,res)=>
{
  let m =await taskController.insertTask(req.body);
    res.send(m);
})

router.get("/", async (req,res)=>
{
    let d = await taskController.getalltasks();
    res.send(d)
})
router.delete("/",async(req,res)=>
{
    let msg = await taskController.deleteTask(req.body.name)
    res.send(msg);
})
router.put("/",async(req,res)=>
{
    let msg = await taskController.updateTask(req.body.name)
    res.send(msg);
})
module.exports = router;
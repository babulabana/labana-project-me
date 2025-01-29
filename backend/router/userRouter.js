const express = require("express")
const router = express.Router();
const userController = require("../controller/userController");
const upload=require("../forMulter")
const path = require("path")
const fs = require("fs")
router.post("/",async (req,res)=>
{
  let m =await userController.insertuser(req.body);
    res.send(m);
})
//:contavy /:name
router.get("/:id",async (req,res)=>
{
    let id = req.params.id;
    let data = await userController.getUser(id)
//     let p = (path.join(__dirname,'..',('/uploads/'+data[0].img)))
//   data[0].img 
  res.send(data[0])
    // res.status(200).sendfile(p) //+"../uploads/2025-01-10T04-52-19.240Zdevelopment.jpg");
    // res.sendFile(p)
    // res.send(p)
})
router.put("/profile",upload.single('img'),async(req,res)=>
{
    // app.post('/profile', upload.single('avatar'),
    //  function (req, res) {
        console.log(req.file.filename)
        let m = await  userController.addprofile(req.body,req.file.filename);
        res.send(m);
    // let m = await  userController.addprofile(req.body);
    // res.send("updated")
})
router.post("/login",async (req,res)=>
{
    let r =await userController.checkLogin(req.body.email,req.body.pwd)
    res.send(r)
})
router.get("/", async (req,res)=>
{
    let d = await userController.getallusers();
    res.send(d)
})
router.delete("/",async(req,res)=>
{
    let msg = await userController.deleteuser(req.body.name)
    res.send(msg);
})
router.put("/",async(req,res)=>
{
    
    let msg = await userController.updateuser(req.body.name)
    res.send(msg);
})
module.exports = router;
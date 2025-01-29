const express = require("express")
const app = express();
const db = require("./config/dbconfig")
const taskRouter = require("./router/taskRouter")
const cors = require("cors")
const userRouter = require("./router/userRouter")
const campRouter = require("./router/campRouter")
// enabling CORS for some specific origins only.
let corsOptions = {
    origin : ['http://localhost:3000',
    'http://localhost:5173'],
 }
 
 app.use(cors(corsOptions))
 app.use("/uploads",express.static(__dirname + '/uploads'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/camp",campRouter)
app.use("/users",userRouter)
app.use("/task",taskRouter);
app.get("/",(req,res)=>
{
    res.send("use /tasks for task");

})
app.listen(8080,()=>console.log("server running"))

var mongoose = require('mongoose');
//Set up default mongoose connection
// var mongoDB = ;
mongoose.connect('mongodb://127.0.0.1/TODOtaskdb')
.then(()=>
{
    console.log('dbconnected')
})
.catch(()=>
{
    console.log("err");
})
 //Get the default connection

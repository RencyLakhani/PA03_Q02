const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Pruduct_MeanStack").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})
const router = require("express").Router();

const Category= require("../models/Category")
const multer = require("multer")
const path = require("path")

const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads/")
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null+ Date.now() + path.extname(file.originalname))
        }
})

var upload = multer({
    storage: Storage
});
router.get("/cat",(req, res) => {
    Category.find((err, data) => {
       if (!err) {
           res.json(data);          
       }
   })
})
router.get("/dd",async(req,res)=>{
    var data = await Category.distinct("Cname")
    res.json(data);
})
router.post("/Add-Category",upload.single('image'), async (req, res) => {         
    // Category.create(req.body,(error,data)=>{
    //    if(!error)
    //    {
    //     res.json(data);                   
    //    }      
    //    else{ 
    //     return error; 
    //    }      
    // })
    console.log();
    var cat = new Category({
        Cname:req.body.Cname,
        image:req.file.filename
    })
  var data = await cat.save();
  res.json(data);
})
// router.get("/cat/:id",async(req,res)=>{
//    Category.findOne({_id:req.params.id},(err,data)=>{
//     if(!err)
//     {
//         res.json(data.Cname);
//     }
//    });   
// })
module.exports = router
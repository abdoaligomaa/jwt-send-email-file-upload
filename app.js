const express=require('express')
const app=express()

const multer=require('multer')


app.use(express.json())

const storageOne=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./singleImages')

    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const storageMult=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./multImages')

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

const uploadOne=multer({storage:storageOne})
const uploadMult=multer({storage:storageMult})
const upload=multer({dest:"./images"})

app.post('/singlFiles',uploadOne.single('image'),(req,res)=>{
   console.log(req.file)
   res.send('true')
})

app.post('/multFiles',uploadMult.fields([{name:"image1", maxCount: 1},{name:"image2", maxCount: 1}]),(req,res)=>{
    console.log(req.files)
    res.send('true')

})

app.listen(3000,console.log('server is listening to port 3000'))


const express=require('express')
const app=express()

const middleware=(req,res,next)=>{
    const a =true
    if (a===true) {
        console.log('you can not enter to the next')
    } else {
        next()        
    }
}

app.use(express.json())
app.get('/',middleware,(req,res)=>{
    res.send('done')
})

app.listen(3000,console.log('server is listening to port 3000'))


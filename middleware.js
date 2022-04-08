const express=require('express')
const app=express()



app.use(express.json())
app.get('/',(req,res)=>{
    res.send('done')
})

app.listen(3000,console.log('server is listening to port 3000'))


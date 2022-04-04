const exp = require('constants')
const express=require('express')
const app=express()

const jwt=require('jsonwebtoken')

app.use(express.json())

const posts=[
    {
        username:'abdo ali 1',
        post:"post one"
    },
    {
        username:'abdo ali 2',
        post:"post two"
    },{
        username:'abdo ali 3',
        post:"post three"
    }
]

app.get('/posts',(req,res)=>{
    res.json(posts)
})

app.post('/login',(req,res)=>{
    //you should auth user using bcrypt before generate jwt 
    const user=req.body.username
    const token =jwt.sign(user,'abdo ali gomaa')
    
    res.json({token})



    res.json(posts)
})

app.listen(3000,console.log('server is listening to port 3000'))


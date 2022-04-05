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

app.get('/posts',vierfyToken,(req,res)=>{
    const post=posts.filter((post)=>{
        return post.username===req.user
    })
    res.json(post)
})

app.post('/login',(req,res)=>{
    //you should auth user using bcrypt before generate jwt 
    const user={name:req.body.username,pass:req.body.password}
    const token =jwt.sign(user,'abdo ali gomaa')
    
    res.json({token})

})

function vierfyToken(req,res,next){
    const token=req.headers.authorization
    const decoded=jwt.verify(token,'abdo ali gomaa')
    req.user=decoded
    console.log(decoded)
    next()
}

app.listen(3000,console.log('server is listening to port 3000'))


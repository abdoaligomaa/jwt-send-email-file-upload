const express=require('express')
const app=express()

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

app.listen(3000,console.log('server is listening to port 3000'))


const express=require('express')
const app=express()

const sendGrid=require('@sendgrid/mail')
sendGrid.setApiKey('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')

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('done')
})

app.listen(3000,console.log('server is listening to port 3000'))


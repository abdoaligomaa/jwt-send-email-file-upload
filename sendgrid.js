const express=require('express')
const app=express()

const sendGrid=require('@sendgrid/mail')
sendGrid.setApiKey('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')

app.use(express.json())

const sendEmail=async()=>{
    const msg={
        to:'abdoaligomaa107@gmail.com',
        from:'aa1567484@gmail.com',
        subject:'some sobject',
        text:'some contect'
    }
    sendGrid.send(msg,(error,info)=>{
        if(error)console.log('some thing went wrong');
        else console.log(info);
    })
}



app.post('/sendEmail',async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
   await sendEmail()
   res.send('true')
})

app.post('/multFiles',(req,res)=>{
    res.send('true')

})

app.listen(3000,console.log('server is listening to port 3000'))


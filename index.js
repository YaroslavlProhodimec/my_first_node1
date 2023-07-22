const express = require('express');
const nodemailer     = require('nodemailer');
const cors     = require('cors');
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


let smtp_login = process.env.SMTP_LOGIN || "---"
let smtp_password = process.env.SMTP_PASSWORD || "---"





const transporter = nodemailer.createTransport({
    // host: "smtp.forwardemail.net",
    service:'gmail',
    // secure:false,
    // tls:{
    //     rejectUnauthorized:false
    // },
    // port: 25,
    auth: {
        user: smtp_login,
        pass: smtp_password
    }
});
app.get('/', function(req, res){
    res.send('Hello World');
});

app.post('/sendMessage',async function(req, res){
     let {message,contacts,name} = req.body
    let info = await transporter.sendMail({
    from:'Test Account Yarik',
    to:'test@gmail.com',
    subject:'Тестирую gmail',
    html:`<div><b>Привет я скаачал интернет<b></div> `
})
    res.send('blablaBLA');
});



app.listen(3000,function () {
    console.log('my ffirst world')
})
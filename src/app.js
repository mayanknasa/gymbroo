const express = require ('express');

const app = express();

app.use('/home',(req,res)=>{
    res.send('Hello from /home')
})

app.use('/',(req,res)=>{
    res.send('Hello from /')
})

app.listen(1233)
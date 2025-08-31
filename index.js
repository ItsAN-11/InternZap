const express = require('express');
const app = express();
require('dotenv').config();


app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(process.env.port, ()=>{
    console.log(`Your server is running at ${port}`);
})
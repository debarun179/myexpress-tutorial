const express = require('express')
const app = express()
const logger = require('./logger')
// req => middleware => res. Normally to log the url/method/time, you have to repeat the same code in all routes
// Instead we setup a logger function. Note no params are needed in logger but this is equivalent to logger = (req,res,next)
// next is needed to pass it to the next middleware

// we can separate the logger into a separate file to prevent the app from becoming clunky
app.get('/',logger, (req,res)=>{
    res.send('Home') 
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})
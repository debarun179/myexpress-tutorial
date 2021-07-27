const express = require('express')
const app = express()

// req => middleware => res. Normally to log the url/method/time, you have to repeat the same code in all routes
// Instead we setup a logger function. Note no params are needed in logger but this is equivalent to logger = (req,res,next)
// next is needed to pass it to the next middleware

// we can separate the logger into a separate file to prevent the app from becoming clunky
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    next() // needed otherwise browser will fail to serve the request  
}

app.get('/',logger, (req,res)=>{
    // const method = req.method
    // const url = req.url
    // const time = new Date().getDate
    // console.log(method,url,time)
    res.send('Home') 
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})
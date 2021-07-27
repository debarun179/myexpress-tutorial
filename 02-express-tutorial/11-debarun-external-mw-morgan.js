const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

//app.use([authorize,logger]) // authorize executes first followed by logger
//1. use is fine if you want to apply to all routes while individual routes can provide more granularity
//2. middleware - can be our own as in this case, can be express like express.static(./public) 
// or something third party like morgan

app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send('Home') 
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})
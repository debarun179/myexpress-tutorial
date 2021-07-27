const express = require('express')
const app = express()
const logger = require('./logger')
// logger needs to be added manually added to every route
// better solution is to use app.use
//app.use(logger) // needs to be at the top - order matters in Express
app.use('/api',logger) // logger middleware function will only be applied to the routes with /api

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
//URL Parameters or Query String Parameters like http://<host>/api/v1/search?query=myquery&count=10
const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
   // res.send('Hello '+req.query.name+' You are '+req.query.age+'years old!!')
   const {search, limit} = req.query;
   let sortedProducts = [...products];

   if (search){
       sortedProducts = sortedProducts.filter((product)=>{
           return product.name.startsWith(search);
       })
   }
   if (limit){
       sortedProducts = sortedProducts.slice(0,Number(limit))
   }
   if (sortedProducts.length<1) {
       return res.status(200).json({success: true, data: []})
   } 
   return res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})
const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/',(req,res)=>{
//    res.json([{name:'John'},{name:'Susan'}])
      res.send('<h1>Home Page</h1> Click <a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    //    res.json([{name:'John'},{name:'Susan'}])
    //   res.send(products)
    // if you want to fetch a subset of the json, use below to return only the id,name,image
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}        
    })
    res.json(newProduct)
})

//code for a single product with id=1 - below is better done with query route parameters
// app.get('/api/products/1',(req,res)=>{
//     //    res.json([{name:'John'},{name:'Susan'}])
//     //   res.send(products)
//     // if you want to fetch a subset of the json, use below to return only the id,name,image
//     const singleProduct = products.find((product)=>product.id===1)
//     res.json(singleProduct)
// })
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req.params)
    const {productID} = req.params
    //console.log(productID)
    const singleProduct = products.find((product)=>product.id===Number(productID))
    if (!singleProduct){
        res.status(404).send('Product Not Found !!')
    } else {
        res.json(singleProduct)

    }
    // Remember the param value is string and hence needs to be cast as a number
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params.productID+' '+req.params.reviewID)
    res.send('Multiple Parameters with Product ID='+req.params.productID+' and reviewID = '+req.params.reviewID)
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})

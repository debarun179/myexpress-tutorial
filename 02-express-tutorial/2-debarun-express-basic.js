const express = require('express')
const app = express();

//app.get, app.post, app.put, app.delete, app.all, app.use, app.listen

app.get('/',(req,res)=>{
    console.log('user hit the server')
    // chained send below with status
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
// anything other than / and /about will cause Cannot GET /resource. Below will override
//Cover all http verbs such as GET, POST - use all
app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})
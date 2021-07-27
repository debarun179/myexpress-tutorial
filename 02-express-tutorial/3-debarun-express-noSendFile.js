const express = require('express')
const app = express()
const path = require('path')

//note the app.use that eases other files
// setup static files
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
// sendFile is not typically used for index.html asset as it is static as well
// so you can add index.html to the public folder with static assets and it will still work
// in server side rendering (SSR) you can use templating engine

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})
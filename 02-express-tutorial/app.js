const express = require('express')
const app = express()
const authRouter = require('./routes/auth')
const peopleRouter = require('./routes/people')
//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false})) //handles/parses form data
app.use(express.json()) //handles javascript json to make the form data available through req.body
app.use('/login',authRouter)
app.use('/api/people',peopleRouter)


app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})
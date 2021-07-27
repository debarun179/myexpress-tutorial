const express = require('express')
const app = express()

//we use let as we will change the data
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false})) //handles/parses form data
app.use(express.json()) //handles javascript json to make the form data available through req.body

app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name} = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send('Please provide credentials')
})
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{
    console.log(req.body)
    //res.status(201).send('Success !!')
    const { name } = req.body
    if(!name){
        return res.status(400).json({success:false,person:'Please provide a name.'})
    }
    else {
        return res.status(201).json({success:true,person:name})
    }
   // res.status(201).json({success:true,})
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if (!person) {
        return res.status(404).json({success:false,msg:`No person with id ${id} exists.`})
    } 
    const newPeople = people.map((person)=>{
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})

})
// Delete will not have any req.body
app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id === Number(id))
    if (!person) {
        return res.status(404).json({success:false,msg:`No person with id ${id} exists.`})
    } 
    const newPeople = people.filter((person)=> person.id!==Number(id))
    return res.status(200).json({success:true, data:newPeople})
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})
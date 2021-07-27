//we use let as we will change the data
let {people} = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res)=>{
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
}

const updatePerson = (req,res)=>{
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

}

const deletePerson = (req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id === Number(id))
    if (!person) {
        return res.status(404).json({success:false,msg:`No person with id ${id} exists.`})
    } 
    const newPeople = people.filter((person)=> person.id!==Number(id))
    return res.status(200).json({success:true, data:newPeople})
}

module.exports = {getPeople,createPerson,updatePerson,deletePerson}

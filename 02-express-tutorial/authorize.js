// const authorize = (req,res,next) =>{
//     console.log('authorize')
//     next()
// }

const authorize = (req,res,next) =>{
    // passing the user in query string
    const {user} = req.query
    if (user === 'Debarun') {
        console.log('Authorized')
        // add a property id to the user
        req.user = {name:'Debarun', id:3}
        next()
    } else {
        console.log('Unauthorized')
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}

module.exports = authorize
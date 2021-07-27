const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    next() // needed otherwise browser will fail to serve the request  
}

module.exports = logger
console.log('Express Tutorial')

const http = require('http');
// setup for accessing an HTML file- 
//we use sync method for getting the file as this is only happening when the server starts up and not with every request
const {readFileSync} = require('fs')
const homePage = readFileSync('./navbar-app/index.html')

// With just / and /about in the if structure below, it results in the CSS and js files not being served
// So lets setup the variables for CSS, logo and js and the if-else logic - as is seen, it is cumbersome
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeJS = readFileSync('./navbar-app/browser-app.js')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const server = http.createServer((req,res)=>{
    console.log('user hit the server')
    // request object has a lot of properties like url, method etc
    console.log(req.method);
    // check the url to handle different endpoints
    const url = req.url;
    if (url === '/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is the About page</h1>')
        res.end()
    }
    else if (url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeJS)
        res.end()
    }
    else if (url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }
    else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

    //http headers to let the browser know what to do with the response e.g. sending json vs text/html. 
    //Change to text/plain below to see the effect on the browser
//     res.writeHead(200,{'content-type':'text/html'})
//     // instead of res.end('Home Page'), you can also use write and end. So you write the data and then signal an end
//     // res.end is mandatory
//     res.write('<h1>This is the home page</h1>')
//     res.end()
// })

server.listen(5000)
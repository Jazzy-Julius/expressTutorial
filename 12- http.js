const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/') {
        res.end('Welcome to our homepage')
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history so far!')
        return
    }
    res.end (`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page!</p>
    <a href="/">back home</a>
    `)
})

server.listen(3005)
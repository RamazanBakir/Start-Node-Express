const express = require('express'); //import express
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); //print additional info to screen as required.

app.use(express.static(__dirname+ '/public'));

app.use((req,res,next) => {
    //console.log(req.headers); we remove this because morgan is print it out.

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server </h1></body></html>');
});


const server = http.createServer(app);
server.listen(port,hostname,() =>{
    console.log(`Server Running at http://${hostname}:${port}`);
});  
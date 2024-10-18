// node js
// open source plateform and cross platefirn js runtime enviroment.
// a Node.jd
// app runs to a singale process withiut creatung thread



// basec http server in nodejs

// const port= 8080;

// const http = require('node:http');
// const fs=require('fs')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'text/plain'})
//     res.end('Ram Ram')
   
// });
// server.listen(port,()=>{
// console.log("server lishning "+port);

// })





// import http,{createServer, STATUS_CODES} from 'node:http'
const { readFileSync } = require('node:fs');
const {createServer} =require('node:http');
// const { url } = require('node:inspector');
const port =process.env.PORT || 8080;
const hostname='127.0.0.1';
let a=5+5;
const server=createServer((req,res)=>{
    const url=req.url
    if(url==='/'){
        const arr=[10,29,'krshna',39,59,74,75,83]

        res.statusCode=200;
        const data=readFileSync('./text.html')
        // res.end(`Ram Ram ${arr.splice(1,3)}`)
        res.end(data)
    }
    else if(url==='/about'){
        res.statusCode=200;
        const about=readFileSync('./about.html')
        res.end(about);
    }

})
server.listen(port,hostname,()=>{
    console.log(`server running at http//${hostname}:${port}`);
    
})
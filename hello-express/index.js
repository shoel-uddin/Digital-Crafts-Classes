const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.get('/', (req,res) =>{
    res.send("Hey how's it")
});

server.listen(3000, 'localhost', ()=> {
    console.log('Running on port http://localhost:3000')
});
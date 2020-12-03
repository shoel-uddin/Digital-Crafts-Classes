const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.get('/', (req,res) =>{
    res.send("Hey how's it")
});

app.get('/cats',(req,res)=>{
    res.send(`
    <ul>
        <li><a href="/cats/oakley">Oakley</a></li>
        <li><a href="/cats/Marco">Marco</a></li>
    </ul>
    `)
})

app.get('/cats/:catName',(req,res)=>{
    const catName = req.params.catName
    res.send(`
    <h1>This is the way, ${catName}!</h1>
    <a href="/cats/">Back</a>
    `)
})

server.listen(3000, 'localhost', ()=> {
    console.log('Running on port http://localhost:3000')
});
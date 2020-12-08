const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

const PORT = 3000
const HOST = 'localhost'

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer); // register a new view engine
app.set('views', 'templates'); // Where to find the template files
app.set('view engine', 'html'); // default view engine (one on 2 line above)

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/lift-off', (req,res)=>{
    res.render('anchor')
})

server.listen(PORT, HOST, ()=>{
    console.log(`Running on ${HOST}:${PORT}`)
})
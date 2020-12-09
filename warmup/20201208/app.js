const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

const PORT = 3500
const HOST = 'localhost'

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


app.get('/', (req,res)=>{
    res.render('home2')
})

app.get('/:name',(req,res) => {
    const {name} = req.params
    // const name = req.params.name
    res.render('name', {
        locals: {
            name
            //^^ short hand for 
            //name : name
        }
    })
})

server.listen(PORT, HOST, ()=>{
    console.log(`Running on ${HOST}:${PORT}`)
})
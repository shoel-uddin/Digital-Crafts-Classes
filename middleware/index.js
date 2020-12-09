const http = require('http')
const express = require('express')
const morgan = require('morgan')
const { nextTick } = require('process')

const app = express()
const server = http.createServer(app)
const logger = morgan('tiny')

const port = 3300
const host = 'localhost'

// Needed for Templates 
// const es6Renderer = require('express-es6-template-engine');
// app.engine('html', es6Renderer);
// app.set('views', 'templates');
// app.set('view engine', 'html');

//app.use(logger)
app.use((req,res, next)=>{
    console.log('🐌 request', req.url, req.method)
    next()
})

app.use((req,res,next)=>{
    console.log()
    next()
})

app.use('/',(req,res,next)=>{
    req.stuff = '🦀'
    next()
})

app.get ('/', (req,res)=> {
    console.log('here is the stuff:', req.stuff )
    res.send(`Hello Y'all`)
})

// Needed for templates rendering
// app.get('/app', (req,res)=>{
//     res.render('home')
// })

server.listen (port, host, ()=>{
    console.log(`Running on ${host}: ${port}`)
})

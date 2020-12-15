

const http = require('http')
const express = require('express')
const morgan = require("morgan")
const helmet = require("helmet")
const logger = morgan("tiny")

const app = express()
const server = http.createServer(app)

app.use(logger)
app.use(helmet())

const port = 3000
const host = 'localhost'

app.use(express.static("public"))

// Needed for Templates 
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.send('Hello')
})

const pets = [
    {pet: "Dog"},
    {pet: "Cat"},
    {pet: "Bird"}
]

// app.get("/pets", (req,res)=>{
//     res.send(pets)
// })
// Needed for templates rendering
app.get('/pets', (req, res) => {
    res.render('pets', {
        locals: {
            pets
        }
    })
})

//catch all if website doesn't
app.get('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

server.listen(port, host, () => {
    console.log(`Running on ${host}: ${port}`)
})

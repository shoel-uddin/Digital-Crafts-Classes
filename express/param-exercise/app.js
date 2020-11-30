const http = require("http")
const express = require("express")
const app = express()
const fs = require("fs")
const port = 4435
const server = http.createServer(app)

let people = require("./data/people.json")

app.get("/", (req,res)=>{
    res.send("<h1>You are home</h1>")
})

//This send all the people
app.get("/api/people", (req,res)=>{
    res.send(people)
})

//This gets the results by gender
app.get("/api/:gender", (req,res)=>{
    const {gender} = req.params
    const personGender= people.filter((person)=> person.gender == gender)
    res.send(personGender)
})
app.get("/api/:email", (req,res)=>{
    const {email} = req.params
    const personEmail= people.filter((person)=> person.email == email)
    res.send(personEmail)
})


server.listen(port, ()=>console.log(`listening on port ${port}`))
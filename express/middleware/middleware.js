const http = require("http")
const express = require("express")
const app = express()
const port = 4444
const server = http.createServer(app)

let db = {people:[], places:[], things:[]}

const timeLogger = (req,res, next)=>{
    console.log(new Date())
    // let requestTime = new Date()
    // console.log("A request came in at "+requestTime)

    // req.reqestTime = requestTime
    next()
}
const checkObj = (req,res,next)=>{
    let {type} = req.params
    if(!db.hasOwnProperty(type)) return res.send("Item does not exist")
    // if(!Object.keys(db).find(o=>o === type)){
    //     return res.send("Item does not exist")
    // }
    next()
}

app.get("/", timeLogger, (req,res)=>{
    res.send("<h1>You are home</h1>")
})

app.get("/api", (req,res)=>{
    const api = req.params;
    res.send(db)
})

app.get("/api/:type",checkObj, (req,res)=>{
    res.send(req.params.type)
})


server.listen(port, ()=>console.log(`listening on port ${port}`))
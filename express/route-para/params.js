const http = require("http")
const express = require("express")
const app = express();
const port = 4430
const server = http.createServer(app)

db = {
    posts:[
        {
            id:"001", 
            title:"Good Things", content:"Lorium ipsum"
        },
        {
            id:"002", 
            title:"Bad Things", content:"FooBar"
        }
    ],
    people:[
        {
            id:"p001", 
            name:"Clint"
        },
        {
            id:"p002", 
            name:"Anna"
        }
    ]
}

app.get("/", (req,res)=>{
    res.send("<h1>You are home</h1>")
})
app.get("api/:type/:id", (req,res)=>{
    const {id} = req.params;
    if(!db.hasOwnProperty(type)) return res.send(null)
    const foundPost = db[type].find(item=>item.id == id)
    res.send(foundPost)
})
app.get("/api/:type", (req,res)=>{
    const {type} = req.params;
    res.send(db[type])
})
server.listen(port, ()=>console.log(`listening on port ${port}`))
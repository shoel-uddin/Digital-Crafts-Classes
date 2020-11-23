const http = require("http")

// const server = http.createServer((req,res)=>{
// //You can combine the status and set headers as an object with res.writeHead
//     res.writeHead(200, {
//         "X-Foo-Header":"RandomData/Random",
//         "X-My-Header-Not-Real":"MoreRandom"
//     })
//     res.end("Sent. Check the network!")
// })

const ships = [
    {
        name:"x-wing",
        type:"fighter"
    },
    {
        name:"tie-fighter",
        type:"fighter"
    },
    {
        name:"y-wing",
        type:"bomber"
    }
];
// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {
//         "Content-Type":"text/html" //"application/json", 
//     })
//     //You can write to the response before sending/ending
//     res.write("<div>This is a div</div>")
//     res.end()
// })

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(ships))
    res.end()
})


server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})
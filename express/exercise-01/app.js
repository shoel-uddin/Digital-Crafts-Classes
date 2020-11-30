const http = require("http")
const express = require("express")
const fs = require("fs");

const app = express();
const port = 4432

const sendFavicon = (req,res)=>{
    fs.readFile("./favicon.ico",(err,data)=>{
        if(err) return res.send(err);
        res.send(data)
    } )
}

const _404Content = `
<!DOCTYPE html>
<html> 
    <head> 
        <title>An Error you have found</title>
    </head>
    <body>
        <h1>404</h1>
        <blockquote>"An Error you have found" - Yoda
        </blockquote>
    </body>
</html>
`;
const serveContent =(title)=> `
<!DOCTYPE html>
<html> 
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
        <div>You are at ${title} Page</div>
    </body>
</html>
`;


const send404  = (req,res)=>{
    res.status(404);
    res.send(_404Content)
}
const serveHome = (req,res)=>{
    res.send(serveContent("Home"))
}

app.get("/favicon.ico", sendFavicon)


app.get("/", serveHome)
app.get("/home", serveHome)

app.get("/contact", (req,res)=>{
    res.send(serveContent("Contact"))
})
app.get("/about", (req,res)=>{
    res.send(serveContent("About"))
})



app.get("*", send404)


const server = http.createServer(app)

server.listen(port, ()=>console.log(`listening on port ${port}`))


// const serveContent = (title, content)=>`
//     <!DOCTYPE html>
//     <html> 
//         <head> 
//             <title>${title}</title>
//         </head>
//         <body>
//             <h1>${title}</h1>
//             <div>${content}</div>
//         </body>
//     </html>
// `;
// const serveHome = (req,res)=>{
//     res.send(serveContent("Home"))
// }
// app.get("/favicon.ico", sendFavicon)
// app.get("/",serveHome)
// app.get("/home", serveHome)
// app.get("/about", (req,res)=>res.send(serveContent("About", "Lets give them something to talk about.")))
// app.get("/contact", (req,res)=>res.send(serveContent("Contact")))
// app.get("*", send404)
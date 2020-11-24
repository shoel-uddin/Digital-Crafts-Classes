const http = require("http");
const port = 5566

const generateContent = require("./generateContent")
const {serveFavicon, serveCss} = require("./serveFile")

const server = http.createServer((req,res)=>{

    if (req.url === "/favicon.ico") return serveFavicon(req,res)
    if (req.url === "/mystyle.css") return serveCss(req,res)

    res.writeHead(200);
    const url = new URL(req.headers.host+req.url) 
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })

    let wrapper =  generateContent({
        page,
        count, 
        additional
    })  
    res.write(wrapper)
    res.end()
})
server.listen(port)
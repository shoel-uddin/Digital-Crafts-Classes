const fs = require("fs")

const serveFavicon = (req, res)=>{
    fs.readFile("./favicon.ico", (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.end(data)
    })
}

const serveCss = (req, res)=>{
    fs.readFile("./mystyle.css", (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.end(data)
    })
}

module.exports = serveFavicon
module.exports = serveCss
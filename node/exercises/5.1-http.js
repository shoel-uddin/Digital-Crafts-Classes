const http = require("http")

const htmlContent = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Fetch from another (Practice)</title>
        </head>
        <body>
            <script>
                fetch('http://localhost:5566/')
                .then(res=>res.json())
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
            </script>
        </body>
    </html>
`;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end(htmlContent)
})

server.listen(3344, ()=>{
    console.log("running on 3344")
})
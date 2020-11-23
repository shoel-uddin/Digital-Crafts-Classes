const http = require("http")

const htmlContent = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Content from Node</title>
        </head>
        <body>
            <h1>This is a full HTML document!</h1>
            <ul>
                <li>It's Valid!</li>
                <li>It's From Node!</li>
                <li>It's Just a String!</li>
            </ul>
            <script>
                console.log("It's like magic")
            </script>
        </body>
    </html>
`;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end(htmlContent)
})

// const server = http.createServer((req, res)=>{
//     res.end("<h1>Hello World</h1> <h2>this is a good day</h2>")
// })

server.listen(3344, ()=>{
    console.log("The server is up and listening")
})
// Create a http server that will host a html document that has a title, a heading, and a list of your favorite foods.
// Make the html document a valid html document.
// Add a secret message in in the console using the script tag.


const http = require("http")

const htmlContent = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTTP Practice</title>
        </head>
        <body>
            <h1>Favorite Foods!</h1>
            <ul>
                <li>Biriyani</li>
                <li>Pizza</li>
                <li>Deserts</li>
            </ul>
            <script>
                console.log("Is this what you were lookiong for?")
            </script>
        </body>
    </html>
`;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end(htmlContent)
})


server.listen(3344, ()=>{
    console.log("The server is up and listening")
})
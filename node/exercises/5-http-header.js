// Create a node application that has an array of objects of people with at least 3 people with the keys "firstName", "lastName", "email".
// Using http, serve that object as json.

const http = require("http")

const people = [
    {firstName:"Jack", lastName:"Ham", email: "yep@yes.com"}, 
    {firstName:"John", lastName:"Not", email: "Not@yes.com"}, 
    {firstName:"This", lastName:"Life", email: "this@yes.com"}
]

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(people))
    res.end()
})

server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})
// Set headers in such a way that you will not have cors issues if you access the content from anywhere.
// (Bonus) make a very simple site, host it using serve on a port other than the api, and fetch from your newly created api.(you can use the script tag)
// (Super Bonus) Using DOM functions (document.createElement()..etc) add a list of the people to your website.
const http = require("http")

const server = http.createServer((req,res)=>{
    //constructing the url object
    const url = new URL(req.headers.host+req.url) 

    // //the queryString is found in the url.searchParams object
    // let searchObj = url.searchParams;
    // console.log(searchObj)

    // //forEach is a bit different
    // url.searchParams.forEach((value,name) =>{
    //     console.log(value,name)
    // })

    //if we know what we are looking for we can use get
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    console.log(page, count)

    let out = " "
    if (page === "about"){
        out+= "<h1> your at the about page</h1>"
    }else if (page === "contact"){
        out+= "<h1> your at the contact page</h1>"
    }else{
        out+= "<h1> your at the home page</h1>"
    }
    out+= `<div>Your count is ${count || 0}</div>`

    res.write(out)
    res.end()
})
server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})
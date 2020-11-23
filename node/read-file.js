const fs = require("fs")

// fs.readFile("test.txtt", 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log(err)
//     console.log(data)
// })

fs.readFile("stuff.json", 'utf8', (err, data)=>{
    if (err) throw err;
    // console.log(typeof data)
    // console.log (typeof ["bear","soda","keys"])
    // console.log(JSON.parse (data))

    let output = JSON.parse (data)
    output.map((value, index)=> console.log(`The item number ${index} is ${value}`))
})
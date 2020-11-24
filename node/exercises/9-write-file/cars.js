const fs = require("fs")

let cars = [
    {
        name:"Totota",
        speed:80,
        year:"2002"
    },{
        name:"Ford",
        speed:100,
        year:2012
    },{
        name:"Chevy",
        speed:90,
        year:2015
    }
]

fs.writeFile("cars.json", JSON.stringify(cars), 'utf8', (err)=>{
    if (err) throw err;
    console.log("The JSON file has been written")
})
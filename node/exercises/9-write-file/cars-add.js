const fs = require("fs")

let cars = JSON.parse(fs.readFileSync("cars.json" ))
let newCar = [{name:"Car1",speed:90,year:2015},{name:"Car2",speed:90,year:2015}]

const addCar = (newCar)=>{
    cars.push(newCar)
    fs.writeFile("cars.json", JSON.stringify(cars),'utf8',(err)=>{
            if (err) throw err;
            console.log("New Car data saved")
        }
    )
}

addCar(newCar)

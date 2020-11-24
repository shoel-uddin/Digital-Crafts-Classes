const fs = require("fs")

let ships = JSON.parse(fs.readFileSync("ship-data.json"))
console.log(ships)

let newShip = {type:"speeder",speed:"Fast", cargo:"none", payload:"none"}
//ships.push(newShip)

// let ships = [
//     {
//         type:"Freighter",
//         speed:"medium",
//         cargo:"large",
//         payload:"low"
//     },{
//         type:"Fighter",
//         speed:"fast",
//         cargo:"none",
//         payload:"medium"
//     },{
//         type:"Bomber",
//         speed:"slow",
//         cargo:"none",
//         payload:"high"
//     }
// ]

// fs.writeFile("ship-data.json", JSON.stringify(ships), 'utf8', (err)=>{
//     if (err) throw err;
//     console.log("The JSON file has been written")
// })

const addShip = (data)=>{
    ships.push(data)
    fs.writeFile("ship-data.json", JSON.stringify(newShip), (err)=>{
        if (err) throw err;
        console.log("New Ship data saved")
    })
}

// addShip(newShip)
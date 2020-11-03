// Make an array of ship objects (at least 3). Each ship needs a name, topSpeed, acceleration, and cargo capacity.
let ships = [
    {
        name: "Ship1",
        topSpeed:50,
        accel: 10,
        cargo: 200
    },
    {
        name: "Ship2",
        topSpeed:30,
        accel: 15,
        cargo: 150
    },
    {
        name: "Ship3",
        topSpeed:40,
        accel: 25,
        cargo: 300
    }
]

// console.log the name and top speed of the 2nd ship.
console.log(ships[1].name, ships[1].topSpeed)

// loop through the array and print out every stat in a key:value style.
// for(attrib in ships){
//     if(!ships.hasOwnProperty(attrib)) continue;
//     console.log(attrib)
//     console.log(ships[attrib])
// }

ships.forEach(function(ship){
    console.log("*********")
    for (key in ship){
        console.log(` ${key} : ${ship[key]} `)
    }
    console.log("*********")
})
// (Bonus) sort the array by the ship with the fastest speed and console log it out.

ships.sort(function(a,b){
    return a.topSpeed - b.topSpeed
}).reverse()

console.log(ships)
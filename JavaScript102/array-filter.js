// let numbers = [5,3,-10,3,-21,78,-54,-1,8]
// let positive = numbers.filter(num=>num > 0)
// console.log(positive)

//common usage
let ships = [
    {
        type:"freighter",
        name:"falcon"
    },
    {
        type:"fighter",
        name:"xwing"
    },
    {
        type:"bomber",
        name:"ywing"
    },
    {
        type:"fighter",
        name:"tie-fighter"
    }
]

let fighters = ships.filter(ship=>ship.type == "fighter")//.map(fighter => fighter.name )
let justNames = fighters.map(fighter => fighter.name )
console.log (fighters)
console.log (justNames)

// let numbers = ["a","b","c"]
// let a = numbers.find(num=>num == "a")
// let d = numbers.find(num=>num == "d")
// console.log(a,d)

let numbers = [1,2,3,4,5,6,7,8]
let more = numbers.find(num=>num > 5)
console.log (more)
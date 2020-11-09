// Create an array of vehicle objects.

// each vehicle object needs to have keys of name, speed, passangers.
// using map, create a list of names of the vehicles.
let vehicle = [
    {
        name: "chevy",
        speed: 80,
        passangers: 4
    },
    {
        name: "ford",
        speed: 70,
        passangers: 6
    },
    {
        name: "dodge",
        speed: 90,
        passanger: 2
    }

]

let names = vehicle.map(type => type.name)

console.log(names)



//Create an array of at least 6 todo items with each todo having keys, id, todo, status.

// Limit the status to "complete","in-progress","todo"
// Using map create a list of different status.
// using map of those status, make a list of status objects that has keys status, and items.

let listTodo = [
    {
        id: 1,
        todo: "laundry",
        status: "complete"
    },
    {
        id: 2,
        todo: "vacume",
        status: "todo"
    },
    {
        id: 3,
        todo: "windows",
        status: "in-progress"
    },
    {
        id: 4"",
        status: "complete"
    },
    {
        id: "laundry",
        status: "complete"
    },
    {
        id: "laundry",
        status: "complete"
    },


]

let 
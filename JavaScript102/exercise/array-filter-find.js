// Create an array of at least 6 todo items with each todo having keys, id, todo, status, deadline (timestamp).
let todo_list = [
    {
        id: 1,
        todo: "laundry",
        status: "complete",
        deadline: new Date('11/07/2020')
    },
    {
        id: 2,
        todo: "vacume",
        status: "todo",
        deadline: new Date('11/08/2020')
    },
    {
        id: 3,
        todo: "windows",
        status: "in-progress",
        deadline: new Date('11/08/2020')
    },
    {
        id: 4,
        todo:"wash car",
        status: "complete",
        deadline: new Date('11/08/2020')
    },
    {
        id: 5,
        todo:"cut grass",
        status: "todo",
        deadline: new Date('11/08/2020')
    },
    {
        id: 6,
        todo:"Homework",
        status: "todo",
        deadline: new Date('11/09/2020')
    },


]

let completed = todo_list.filter(todo => todo.status === "complete" ? true : false)
console.log(completed)



// Make at least one date before today.
// Limit the status to "complete","in-progress","todo"
// Using filter, create an array of only the complete items.
// Using find, get the soonest todo item that has a status of "todo".
// using filter get an array of all of the past due items.

let progress = todo_list.filter(item=>new Date (item.deadline).getTime() < Date.now())
console.log(progress)


let timestamp = new Date('11/30/1981'). getTime()
console.log (timestamp)
const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dom',
    'Elli'
]

// for (let i=0; i<names.length; i++){
//     const oneName = names[i]
//     console.log(`${i}: ${oneName}`)
// }

// for (let oneName of names){
//     console.log(`${oneName}`)
// }

// const hello = (whom) => console.log(`Hello ${whom}`)
// const bye = (whom) => console.log(`Bye ${whom}`)

// names.forEach(hello) // loops through to say Hello Alice ... so on.
// names.forEach(bye)

// const combo = (name) => {
//     hello(name)
//     bye(name)
// }

// names.forEach(combo)
// names.forEach((n) =>{ //same as other forEach
//     hello(n)
//     bye(n)
// })

//Demo of .Filter
const helloLongName = (n) =>{
    if (n.length > 4){
        hello(n)
    }
}
// const isNameLong = (n) => { //same as next code
//     return n.length > 4 // same as next few lines of code
//     // if (n.length >4){
//     //     return true
//     // }else{
//     //     return false
//     // }
// }
const isNameLong = (n) => n.length > 4

const longNames = names.filter(isNameLong)
console.log(longNames)
//Implement .Filter

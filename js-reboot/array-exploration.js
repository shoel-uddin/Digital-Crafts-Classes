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

const hello = (whom) => console.log(`Hello ${whom}`)
const bye = (whom) => console.log(`Bye ${whom}`)

// names.forEach(hello) // loops through to say Hello Alice ... so on.
// names.forEach(bye)

const combo = (name) => {
    hello(name)
    bye(name)
}

names.forEach(combo)
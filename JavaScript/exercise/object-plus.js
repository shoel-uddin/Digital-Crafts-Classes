// Instance an object of any name of your choice.
function World() {}
  let space = World()

space = new World()
console.log(space)

// Using the mdn documents about Array, check to see if that instance is an array.
console.log(Array.isArray(space))
typeof space 
// create an array and check to see if it is an array as well.
let home= ['Base', 'Outter', 'Inner']

Array.isArray ([])

// Using the documents join the array together and console.log the results.

console.log(home.join())
console.log(home.join(''))
console.log(home.join('-'))
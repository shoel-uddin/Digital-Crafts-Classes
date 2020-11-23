// Create a node program that requires the os module.
const os = require ("os")

// Look through the os module documentation and print the following 3 pieces of information:

// // The amount of free memeory in the system.
// console.log(os.freemem())

// // The network interfaces information.
// console.log(os.networkInterfaces())

// // The user information for the system.
// console.log(os.userInfo())

// Make a function that will retrieve all of the above pieces of information and return that information in an array.
const getInfo = ()=>{
    let arr = [os.freemem(),os.networkInterfaces(), os.userInfo()]
    return arr
}
let results = getInfo()
console.log(results)

// Call that function and set the returned value to an variable and console.log the variable.

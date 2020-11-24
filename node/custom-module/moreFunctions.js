const function1 = ()=>{
    console.log("function1 is being called")
}

const function2 = ()=>{
    console.log("function2 is being called")
}

//Module exports is an object by default.
//You can simply assign a key to a function
module.exports = {function1, function2}
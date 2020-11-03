// Write a function that has an anonymous function as the first argument and a number as the second argument.

// the anonymous function needs to console.log something.
// Have the first function count from 0 to the number that the second argument is.
// After it is done counting have it call the anonymous function.
// call the function again with a different function as the argument.


const anonymousFunction = function(single){
    console.log (" Is this it?");
}

function newFunction (emptyFunction, number){
    let i = 0;
    while (i <= number){
        console.log(i);
        i++;
    }
    emptyFunction();
}

newFunction(anonymousFunction, 10)

newFunction(function(){
    console.log("Differnt Function");
})
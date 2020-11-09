// Write an arrow function that accepts a number as an argument and multiplys that number by itself and returns the value.



// Write an arrow function that has 2 arguments. Add the two arguments and console.log the results.
// const arrowFunc = (a, b,c,d) => (a+b+c)/d
const arrowFunc = (a, b,c,d) => {
    return (a+b+c)/d
}
console.log(arrowFunc(1,2,3,2))

// Write an array of names.using forEach loop through the array and have the callbakc function be an arrow function that prints will print the index +1 and then the name.
arry = ['sho', 'sky', 'lia', 'mira']
const newFunc = () => {
    arry.forEach(name => {
        console.log(name) 
    }
}
newFunc()
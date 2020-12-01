
//const whom = "sho"


function helloWorld() {
    console.log("Hello World");
}



function helloTurkey(){
    console.log("hello Turkey");
}
// //Function Declaration
// function helloWhom(person){
//     console.log(`Hello ${person}`)
// }
// //Function as a variable
// const helloWhom = function (person){
//     console.log(`Hello ${person}`);
// }
// //Function as an arrowFunction
const helloWhom = (person) => {
    console.log(`Hello ${person}`);
}

//SAME way to write it as below
const makeSandwhich = (toppings) => {
    return `[bread] ${toppings} [bread]`
}
//SAME as above
const makeSandwhich = (toppings) => `[bread] ${toppings} [bread]`

const mySandwhich = makeSandwhich('tofu')
console.log(mySandwhich)

helloWhom('Milla');
// helloWorld()
// helloTurkey()
//written different
const myArrowFunc = (foo)=>{
console.log(foo)
}
//called the same way
myArrowFunc('got some data for ya')

const myFunc = function (foo) {
    console.log (foo)
}

// //returning and arguments
// const returnStuff = (arg)=>{
// return 'stuff'+arg
// }
const returnStuff = (arg)=>'stuff'+arg

console.log(returnStuff(' something'))



const doSomething = function(callback){
    console.log('I did something')
    callback()
}

doSomething(()=>{
    console.log('The function is finished and now it is my turn')
})

//condensed callback
let myArr = ['a','b','c','d']
myArr.forEach((letter,idx)=>console.log(letter, idx))
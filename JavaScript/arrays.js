// // let my Arr = []

// let myArr = ['a','b','c']
// console.log(myArr[0])

// myArr.push('d')
// console.log(myArr)

// let removed = myArr.pop()
// console.log(removed)
// console.log(myArr)

// myArr.unshift('z')
// console.log(myArr)

// let firstItem = myArr.shift()
//   console.log(firstItem)
//   console.log(myArr)


//loop 

let myArr = ['a','b','c','d','e']

for (let i =0; i < myArr.length; i++){
    console.log(myArr[i])
}

myArr.forEach(function(letter, idx){
    console.log(letter,idx)
})

// let myArr = ['a','b','c','d','e']
// for(letter of myArr){
//     console.log(letter)
// }
let number = 20
for (let i = 0; i <= number; i++){
    if (!(i % 2)) continue;
    if (!(i % 3)) continue;
    console.log (i)
}

number = 200
let value = 0
while (number >0){
    if ((number %2 !=0) && (number %3 !=0)){
        value += number
    }
    number--
}
console.log (value)

//let number = 200
// let value = 0
// while (number > 0){
//     if((number % 2) && (number % 3)){
//         value += number    
//     }
//     number--
// }
// console.log(value)
// number = 200
// value = 0
// let i = 0
// while (i < number){
//     if((i % 2) && (i % 3)){
//         value += i    
//     }
//     i++
// }
// console.log(value)
// value = 0
// for(let i = 0; i < number; i++){
//     //value += (i % 2 != 0 && i % 3 != 0) ? i : 0
//     //if(i % 2 != 0 && i % 3 != 0) value += i
//     if((i % 2) && (i % 3)){
//         value += i    
//     }
// }
// console.log(value)
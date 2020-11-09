let letters = ["a","b","c","d"]
let letterPlus = letters.map(function(letter){
    return letter+letter
})
console.log(letters)
console.log(letterPlus)

let letterObj = letters.map((letter,idx)=>{
    return {
        name:letter,
        index:idx,
        letterIdx: letter+idx
    }
})
console.log(letterObj)


let family = [
    {
        name:"clint",
        age:38
    },
    {
        name:"Anna",
        age:37
    },
    {
        name:"Olivia",
        age:11
    },
    {
        name:"Alle",
        age:9
    },
    {
        name:"Mark",
        age:9
    }
]

//returns just names
let justNames = family.map(function(member){
    return member.name
})

//you will almost always use arrow functions 
//yea! implicit returns
let justNames1 = family.map(member=>member.name)
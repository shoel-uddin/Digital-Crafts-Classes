// console.log("This is a test")
// console.table([{name: "Sho", age:2}, {name:"you", age: 0}])




// let paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)

// console.log(paragraphs)
// console.dir(paragraphs[1])

// let ideas = document.getElementsByClassName("child-idea")
// console.log(ideas)

// //getElementById
// let main = document.getElementById("main-idea")
// console.log(main)

// //querySelector
// let heading = document.querySelector("h1") //tag
// console.log(heading)
// let main = document.querySelector("#main-idea") // id
// let idea = document.querySelector(".child-idea") // class
// let notHere = document.querySelector("#not-here") //not in document
// //querySelector always gets one item or null if nothing is found. If there is more than one item it only finds the first item.

// //querySelectorAll
// let ideas = document.querySelectorAll(".child-idea")
// console.log(ideas)
// console.dir(ideas)
// ideas.forEach(function(idea){
//     console.log(idea)
// })

// // crating Element
// let content = document.createElement("div")
// let bigList = document.createElement("ul")
// let someText = document.createElement("p")
// //These items are created but not added yet.

// console.log(content, bigList)

// let main = document.querySelector("main")

// main.append(content, bigList)

// for (let i=0; i<6; i++){
//     let l= document.createElement("li")
//     l.append(`This is item #${i}`)
//     bigList.append(l)
// }

// let main = document.querySelector("main")
// let p = document.createElement("p")
// p.append("This is the text in the paragraph")

// let p2 = document.createElement("p")
// p2.append("Some additional text")

// main.append(p, p2)

// let header = document.querySelector("h1")
// header.innerText = "Look a new title"

// let mainIdea = document.querySelector("#main-idea")
// mainIdea.innerText = "<div>Im going to be trixy here</div>"
//   //Not what I was expecting


// Modifying Attributes
// -------------------------
// 

//---------------------------
let header = document.querySelector('h1')
console.dir(header)
header.style= "border-bottom:1px solid; text-align: right; color:#446699"

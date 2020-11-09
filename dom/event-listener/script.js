let button = document.querySelector("#more-info")
button.classList.add("btn")

const func1 = function(evt){
    console.log(evt)
    console.log('function1 was fired')
}
const func2 = function(evt){
    console.log(evt)
    console.log('function2 was fired')
}

button.addEventListener("click", func1)
button.addEventListener("click", func2)


// console.log('Gonna load the DOM')

// window.addEventListener("DOMContentLoaded", function(evt){
//     console.log('THE DOM HAS BEEN LOADED!')
// })

button.removeEventListener("click", func2)

let scrollAmount = 0
const scrollFunc = function(){
    console.log(scrollAmount)
    scrollAmount++;
    if(scrollAmount > 30){
        window.removeEventListener('scroll', scrollFunc)
}
}

window.addEventListener('scroll', scrollFunc)
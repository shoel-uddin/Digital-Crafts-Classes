// Create a html document that only has a single div in the body that has an id of "main-content".
// Add a ul with 5 li child items in the ul.
// (Bonus) use a for loop to add the child li items.

let div = document.querySelector("#main-content") // gotta make the selection first for something new to be added
let ulList = document.createElement("ul")



div.append(ulList)

for (let i=0; i<6; i++){
    let l= document.createElement("li")
    l.append(`This is item #${i}`)
    bigList.append(l)
}
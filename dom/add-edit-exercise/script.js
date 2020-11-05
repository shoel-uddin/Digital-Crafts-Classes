// Create a html document that only has a single div in the body that has an id of "main-content".
// Add a ul with 5 li child items in the ul.
// (Bonus) use a for loop to add the child li items.

let div = document.querySelector("#main-content"); // gotta make the selection first for something new to be added
let ulList = document.createElement("ul"); // create the element

div.append(ulList); // append allows it to be added to query after its created

for (let i = 1; i < 6; i++) {
  let l = document.createElement("li");
  l.append(`This is item #${i}`);
  ulList.append(l);
} //// using for loop
//// naming the new element l while creating "li"
//// appending the l which has 'li' to say "this is item #"
//// ulList is the ul which contains "li" to coniant the strings from 'l'

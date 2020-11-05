// Create an empty html document that has nothing in the body.
// Using any of the techniques above (execpt for innerHTML)
// add a h1 with content as a title.

let header = document.querySelector("body");
let h = document.createElement("h1");
header.append(h);
h.innerText = "Content";

// add a main element.
let body = document.querySelector("body");
let main = document.createElement("main");
body.append(main);

// add a section inside of the main element.

let sec = document.querySelector("main");
let section = document.createElement("section");
sec.append(section);
// add a h2 element with a section title inside of the section element.
let title = document.querySelector("section");
let h2 = document.createElement("h2");
title.append(h2);
h2.innerText = "Section";
// add a p element inside of the element with some text.
let p = document.createElement("p");
title.append(p);
p.innerText =
  "This is a line inside of a paragraph tag, which is under the section with a h2 tag!";
// add a list of items in the main element.
let ulList = document.createElement("ul");
let l = document.createElement("li");
l.append("This is item 1");
l.append("This is item 1");
// l.append("This is item 1");
main.append(ulList);
ulList.append(l);

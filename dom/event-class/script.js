let myEvent = new Event("foo");
console.log(myEvent);

// //the attribute is the event 'type' with on in front of it.
// window.onresize = function(evt){
//     console.log(evt) // the event object is passed!
// //do more things!
// }
let clicked = 0;
let button = document.querySelector("#more-info");
button.classList.add("btn");
button.onclick = function (evt) {
  clicked++;
  button.innerText = clicked;
};

document.querySelector("h1").onclick = function (evt) {
  console.log("header was clicked");
};

// //JUst for fun
// let color = 254;
// let body = document.querySelector("body");
// //again the browser passes the event to the function
// body.onscroll = function (e) {
//   body.style.background = `rgb(${color}, ${color}, ${color})`;
//   color--;
//   color = color < 0 ? 0 : color;
// };
// //color gets darker as your scroll

// //asynchronous
// let profilePic = document.createElement("img");
// profilePic.onload = function (evt) {
//   console.log("picture src is downloaded Now I can add it");
//   document.body.append(profilePic);
// };
// console.log("trying to load the image");
// profilePic.src =
//   "https://www.desktopbackground.org/download/1920x1200/2015/12/13/1056660_top-large-hd-wallpapers-landscape-wallpapers_1920x1200_h.jpg";

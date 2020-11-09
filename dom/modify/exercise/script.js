let clickFun = function(evt){
  evt.target.nextElementSibling.classList.toggle("hidden")
}
let title = document.querySelectorAll(".title")

title.forEach(function(title) {
  title.onclick = clickFun
  evt.target.nextElementSibling.classList.add("hidden")
})
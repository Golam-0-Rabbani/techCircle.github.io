var sticks = document.querySelector(".sticks");
var menus = document.querySelector(".menus");


sticks.addEventListener("click", ()=>{
  
  
  var top = document.querySelector(".top");
  var middle = document.querySelector(".middle");
  var bottom = document.querySelector(".bottom");
  
  menus.classList.toggle("afterMenus");
  top.classList.toggle("afterTop");
  middle.classList.toggle("afterMiddle");
  bottom.classList.toggle("afterBottom");
})
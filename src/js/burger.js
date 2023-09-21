let menuBtn = document.querySelector(".hamburger");
let body = document.querySelector(".body");
let menu = document.querySelector(".nav-mobile__wrapper");
let menuItem = document.querySelectorAll(".nav-mobile__link");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("menu-active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("menu-active"); 
  });
});
   

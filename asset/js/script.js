// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "nav") {
//       x.className += " responsive";
//     } else {
//       x.className = " nav";
//     }
//   }

var nav = document.querySelector("#myTopnav");
nav.onclick = function myFunction() {
  var navber = document.querySelector(".nav");
  navber.classList.toggle("responsive");
};

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#preloader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#preloader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
}; 







// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}







// Get the container element
var navitems = document.getElementById("navbar-menu");

// Get all buttons with class="btn" inside the container
var list = navitems.getElementsByTagName("li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("item-active");
    current[0].className = current[0].className.replace("item-active", "");
    this.className += "item-active";
  });
}




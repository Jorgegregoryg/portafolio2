// Get the browser window size
// Get the size of the device screen
var screenWidth = screen.width;
var screenHeight = screen.height;

// Get the browser window size
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Get the size of the entire webpage
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

// Showing the sizes on the webpage
/* var x = document.getElementById("screen");
x.innerHTML = "Screen: w: " + screenWidth + ", h: " + screenHeight + ".";*/

var y = document.getElementById("window");
y.innerHTML = "w: " + windowWidth + ", h: " + windowHeight + ".";

/* var z = document.getElementById("page");
z.innerHTML = "Webpage: w: " + pageWidth + ", h: " + pageHeight + "."; */

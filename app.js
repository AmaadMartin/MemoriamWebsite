// Set up variables
var carousel = document.getElementById("carousel");
var inner = document.querySelector(".carousel-inner");

// Function to resize the carousel based on the size of the images
function resizeCarousel() {
    // Get the width and height of the first image
    var image = inner.querySelector("img");
    var width = image.offsetWidth;    
    var height = image.offsetHeight;
    // Set the width and height of the carousel and images
    carousel.style.width = width + "px";
    carousel.style.height = height + "px";
    inner.style.width = width * 5 + "px";
    inner.style.height = height + "px";
    for (var i = 0; i < inner.children.length; i++) {
        inner.children[i].style.width = width + "px";
        inner.children[i].style.height = height + "px";
    }
}
/*
const carousel_image = document.querySelector('#carousel')

// Select the images in the carousel
// Get all the image elements
const images = document.querySelectorAll('.carousel-inner img');

// Set the first image as the active image
let activeImage = images[0];
console.log(images[0])
activeImage.classList.add('active');

// Set the first gradient colors to match the active image
let gradient = `linear-gradient(to right, ${window.getComputedStyle(activeImage).backgroundColor}, transparent)`;
/*carousel_image.style.background = gradient;*/

/*
// Add an event listener for when the active image changes
carousel.addEventListener('transitionend', () => {
  // Update the active image and gradient colors
  activeImage = carousel.querySelector('.active');
  gradient = `linear-gradient(to right, ${window.getComputedStyle(activeImage).backgroundColor}, transparent)`;
  carousel.style.background = gradient;
});*/


// Resize the carousel when the window loads
/*window.addEventListener("load", resizeCarousel);

// Resize the carousel when the window is resized
window.addEventListener("resize", resizeCarousel);*/
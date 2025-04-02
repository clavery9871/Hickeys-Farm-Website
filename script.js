//JavaScript to Control the Carousel
var myCarousel = document.getElementById('myCarousel');
// Initialize the Bootstrap carousel
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,  // Time between slides in milliseconds
  ride: 'carousel' // Enables automatic sliding (you can change it to false if you don't want it to auto-ride)
});
// To manually cycle the carousel
function cycleCarousel() {
  carousel.next();  // Move to the next slide
}
// Example: Manually pause the carousel
function pauseCarousel() {
  carousel.pause();
}
// Example: Manually start the carousel
function startCarousel() {
  carousel.cycle();
}

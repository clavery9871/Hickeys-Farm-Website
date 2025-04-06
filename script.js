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
// Manually start the carousel
function startCarousel() {
  carousel.cycle();
}
// Manually pause the carousel
function pauseCarousel() {
  carousel.pause();
}


let mini = true;
// Sidebar animation
function toggleSidebar(){
  if (mini) {
    console.log('Opening sidebar');
    console.log(mini);
    document.getElementById('sidebar').style.width = "1500px";
    mini = false;
  } else {
    console.log('Closing sidebar');
    console.log(mini);
    document.getElementById('sidebar').style.width = "300px";
    mini = true;
  }
}
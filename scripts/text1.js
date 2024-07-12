document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector(".slider");
  let sliderWidth = slider.clientWidth;
  let numSlides = slider.children.length;

  let currentIndex = 0;
  let interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000ms)

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= numSlides) {
      currentIndex = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    let offset = -currentIndex * sliderWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }
});
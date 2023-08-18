const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');
    let currentIndex = 0;

    function slide(direction) {
      if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      } else if (direction === 'next') {
        currentIndex = (currentIndex + 1) % sliderItems.length;
      }
      const translateX = -currentIndex * 100; // Translate by 100% for each slide
      slider.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => slide('prev'));
    nextButton.addEventListener('click', () => slide('next'));

    const indicators = document.querySelectorAll('.indicator');

    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }

    function autoSlide() {
      slide('next');
      updateIndicators();
    }
    let autoSlideInterval = setInterval(autoSlide, 2000); // Auto-slide every 1 second

    // Pause auto-sliding when hovering over the slider
    slider.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
    slider.addEventListener('mouseout', () => autoSlideInterval = setInterval(autoSlide, 2000));











// tab function
document.addEventListener("DOMContentLoaded", function () {
  // Set the first tab as active and show its content on page load
  const defaultTab = document.getElementById("tab1");
  defaultTab.style.display = "block";
  const defaultButton = document.querySelector(".tab-button");
  defaultButton.classList.add("active");
});

function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

//<<<<<<<<<<<<<<<<<<<<<<< This code for Galary photo slider >>>>>>>>>>>>>>>>>>>>>>>>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
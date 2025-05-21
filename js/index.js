const menu = document.getElementById("mobile-menu");
const toggle = document.getElementById("menuToggle");
const close = document.getElementById("closeMenu");

toggle.addEventListener("click", () => {
  menu.classList.remove("translate-x-full", "opacity-0");
  menu.classList.add("translate-x-0", "opacity-100");
});

close.addEventListener("click", () => {
  menu.classList.add("translate-x-full", "opacity-0");
  menu.classList.remove("translate-x-0", "opacity-100");
});

// Swiper Slider

var swiper = new Swiper(".courseslider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".course-button-next",
    prevEl: ".course-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

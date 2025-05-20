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

const navbar_icon = document.getElementById("navbar");
const mobile_menu = document.querySelector(".mobile-menu");
const ver_bar1 = document.querySelector(".vertical_bar-1");
const ver_bar2 = document.querySelector(".vertical_bar-2");

navbar_icon.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
  ver_bar1.classList.toggle("animation-b1");
  ver_bar2.classList.toggle("animation-b2");
  // ver_bar1.style.transform = "rotate(133deg) translateY(-5px)";
  // ver_bar2.style.transform = "rotate(-135deg) translateY(5px)";
  // ver_bar2.style.transform = "translateY(-15px)";
});
// console.log(window.innerWidth);

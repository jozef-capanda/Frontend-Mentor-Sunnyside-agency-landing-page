const menu = document.querySelector(".navigation__list--header");
const menuItems = document.querySelectorAll(".navigation__link--header");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (menu.classList.contains("show-navigation")) {
    menu.classList.remove("show-navigation");
  } else {
    menu.classList.add("show-navigation");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove("show-navigation");
  }
});

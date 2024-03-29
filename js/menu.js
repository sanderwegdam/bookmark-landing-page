const menu = document.querySelector(".menu-links");
iconHamburger = document.querySelector(".icon-hamburger");
toggleHamburgerIcon = document.querySelector(".toggle-icon-hamburger");

iconHamburger.addEventListener("click", function (e) {
  e.preventDefault();

  if (menu.classList.contains("menu-open")) {
    // Als het menu al open is, sluit het
    menu.classList.remove("menu-open");
    toggleHamburgerIcon.src = "images/icon-hamburger.svg";
  } else {
    // Anders open het menu
    menu.classList.add("menu-open");
    toggleHamburgerIcon.src = "images/icon-close.svg";
  }
});


// Event listener toevoegen aan het document om klikken buiten het menu te detecteren
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !iconHamburger.contains(e.target)) {
    // Als er buiten het menu en buiten het hamburgerpictogram wordt geklikt
    // productMenu.style.display = "none";
    // companyMenu.style.display = "none";
    // connectMenu.style.display = "none";
    menu.classList.remove("menu-open");
    // menu.classList.add("menu");

  }
});
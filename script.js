const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__list");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  if (burgerMenu.classList.contains("active")) {
    headerMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    headerMenu.classList.remove("active");
    document.body.style = "";
  }
});

const pageMainImages = document.querySelectorAll(".page-main__image");

let counter = 0;

setInterval(function () {
  if (counter < pageMainImages.length) {
    if (counter > 0) {
      pageMainImages[counter - 1].classList.remove("page-main__image_active");
      pageMainImages[counter].classList.add("page-main__image_active");
    }
    if (counter === 0 && pageMainImages[pageMainImages.length - 1].classList.contains("page-main__image_active")) {
      pageMainImages[pageMainImages.length - 1].classList.remove("page-main__image_active");
    }
    counter++;
  } else {
    counter = 0;
    pageMainImages[pageMainImages.length - 1].classList.remove("page-main__image_active");
    pageMainImages[counter].classList.add("page-main__image_active");
  }
}, 5000);

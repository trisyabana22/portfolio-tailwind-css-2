const menus = document.querySelector(".menus");
const overlayed = document.querySelector(".overlayed");

const menusShow = document.querySelector(".menus-show");
const menuHide = document.querySelector(".menu-hide");

// Active menu
const link = document.querySelectorAll(".link");

Array.from(link).forEach((item) => {
  item.addEventListener("click", () => {
    let selected = document.getElementsByClassName("activee");
    selected[0].className = selected[0].className.replace(" activee", "");
    item.className += " activee";
  });
});
// end Aktif Menu ======

// scroll active menu
const sections = document.querySelectorAll("section");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
      //   console.log(current);
    }
  });

  link.forEach((li) => {
    li.classList.remove("activee");
    if (li.classList.contains(current)) {
      li.classList.add("activee");
    }
  });
};

// end scroll Menu

menusShow.addEventListener("click", function () {
  overlayed.classList.remove("hidden");
  menus.classList.remove("translate-hidden");
  menus.classList.add("transform-none");
});

menuHide.addEventListener("click", function () {
  overlayed.classList.add("hidden");
  menus.classList.add("translate-hidden");
  menus.classList.remove("transform-none");
});

// const contentt = document.querySelector(".contentt");

overlayed.addEventListener("click", function () {
  overlayed.classList.add("hidden");
  menus.classList.add("translate-hidden");
  menus.classList.remove("transform-none");
});

// time
const time = document.querySelector(".time");
// const timer = new Date().toLocaleTimeString();

setInterval(setTime, 1000);

function setTime() {
  time.innerHTML = new Date().toLocaleTimeString();
}

"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const boxElements = document.querySelectorAll(".white-box");
  const gifFrames = [
    "url(./gif/png1.png)",
    "url(./gif/png2.png)",
    "url(./gif/png3.png)",
    "url(./gif/png4.png)",
    "url(./gif/png5.png)",
    "url(./gif/png6.png)",
    "url(./gif/png7.png)",
    "url(./gif/png8.png)",
    "url(./gif/png9.png)",
    "url(./gif/png10.png)",
    "url(./gif/png11.png)",
    "url(./gif/png12.png)",
    "url(./gif/png13.png)",
    "url(./gif/png14.png)",
    "url(./gif/png15.png)",
    "url(./gif/png16.png)",
  ];

  boxElements.forEach((box, index) => {
    box.style.backgroundImage = gifFrames[index];
  });
});

let btnMagic = document.getElementById("btnMagic");
let allBoxes = document.querySelectorAll(".white-box");
let bigMinionContainer = document.getElementById("main-image-container");
let smallMinionContainer = document.getElementById("small-img-container");
let animateClassBigImage = document.getElementById("main-animate-container");

bigMinionContainer.style.display = "none";

btnMagic.addEventListener("click", magicActivate);

function magicActivate() {
  allBoxes.forEach(function (box) {
    box.classList.add("animate");

    setTimeout(function () {
      box.classList.remove("animate");
    }, 2000);
  });
  smallMinionContainer.style.display = "none";
  bigMinionContainer.style.display = "flex";
}

function magicActivate() {
  if (btnMagic.classList.toggle("active")) {
    let animationDuration = 1000;

    allBoxes.forEach(function (box) {
      box.classList.add("animate-right");
    });

    setTimeout(function () {
      allBoxes.forEach(function (box) {
        box.classList.remove("animate-right");
      });

      smallMinionContainer.style.display = "none";
      bigMinionContainer.style.display = "flex";
    }, animationDuration);
  } else {
    let animationDuration = 500;

    animateClassBigImage.classList.add("animate-left");

    setTimeout(function () {
      animateClassBigImage.classList.remove("animate-left");

      smallMinionContainer.style.display = "flex";
      bigMinionContainer.style.display = "none";
    }, animationDuration);
  }
}

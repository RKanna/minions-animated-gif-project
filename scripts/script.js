"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const boxElements = document.querySelectorAll(".white-box");
  const gifFrames = [
    "url(/gif/splited/png1.png)",
    "url(/gif/splited/png2.png)",
    "url(/gif/splited/png3.png)",
    "url(/gif/splited/png4.png)",
    "url(/gif/splited/png5.png)",
    "url(/gif/splited/png6.png)",
    "url(/gif/splited/png7.png)",
    "url(/gif/splited/png8.png)",
    "url(/gif/splited/png9.png)",
    "url(/gif/splited/png10.png)",
    "url(/gif/splited/png11.png)",
    "url(/gif/splited/png12.png)",
    "url(/gif/splited/png13.png)",
    "url(/gif/splited/png14.png)",
    "url(/gif/splited/png15.png)",
    "url(/gif/splited/png16.png)",
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
    let animationDuration = 1000; // Duration of the animate class animation

    // Add the animate class to each box
    allBoxes.forEach(function (box) {
      box.classList.add("animate-right");
    });

    // Wait for the animation to complete
    setTimeout(function () {
      // Remove the animate class from each box
      allBoxes.forEach(function (box) {
        box.classList.remove("animate-right");
      });

      // Modify the display properties
      smallMinionContainer.style.display = "none";
      bigMinionContainer.style.display = "flex";
    }, animationDuration);
  } else {
    let animationDuration = 500; // Duration of the animate class animation

    animateClassBigImage.classList.add("animate-left");

    // Wait for the animation to complete
    setTimeout(function () {
      // box.classList.remove("animate-left");
      animateClassBigImage.classList.remove("animate-left");

      // Modify the display properties
      smallMinionContainer.style.display = "flex";
      bigMinionContainer.style.display = "none";
    }, animationDuration);
  }
}

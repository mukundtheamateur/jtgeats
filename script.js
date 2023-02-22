"use strict";

/*************** SLIDER *************/
const slides = document.querySelectorAll(".slide-item");
const rightSlider = document.querySelector(".right-slider");
const leftSlider = document.querySelector(".left-slider");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const leftCircle = document.querySelector(".circle-left");
const rightCircle = document.querySelector(".circle-right");

const maxSlides = slides.length;
let itemsToShow = 3;
let currSlide = 0;



//for left slider button
leftSlider.addEventListener("click", function () {
  if (currSlide == itemsToShow - maxSlides) currSlide = 1;
  currSlide--;
  slides.forEach((s, i) => {
    console.log(currSlide);
    s.style.transform = `translateX(${104 * currSlide}%)`;
  });
});

//for right slider button
rightSlider.addEventListener("click", function () {
  if (currSlide == 0) currSlide = itemsToShow - maxSlides - 1;
  currSlide++;
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${104 * currSlide}%)`;
    console.log(currSlide);
  });
});
// console.log(leftBtn);
leftBtn.addEventListener("hover", function () {
  console.log("hello");
});

/*************** BUTTON HOVER *************/

// for left button
const mouseLeave = function () {
  leftCircle.classList.remove("filled-circle");
};

const mouseEnter = function () {
  leftCircle.classList.add("filled-circle");
};
leftBtn.addEventListener("mouseenter", mouseEnter);
leftBtn.addEventListener("mouseleave", mouseLeave);

//for right buttton
rightBtn.addEventListener("mouseenter", function () {
  rightCircle.classList.add("filled-circle");
});

rightBtn.addEventListener("mouseleave", function () {
  rightCircle.classList.remove("filled-circle");
});

/*************** VIDEO CONTROL *************/

const myvideo = document.querySelector(".cover-video");
const pausedBtn = document.querySelector(".paused-btn");
const audio = document.querySelector(".audio");

const playPause = function () {
  if (myvideo.paused) {
    myvideo.play();
    audio.play();
    myvideo.loop = "true";
    audio.loop = "true";
    audio.volume = 0.5;
    pausedBtn.style.opacity = "0";
  } else {
    myvideo.pause();
    pausedBtn.style.opacity = "1";
    audio.pause();
  }
};

myvideo.addEventListener("click", playPause);
pausedBtn.addEventListener("click", playPause);

// modal window

// add to dish modal
const modal = document.querySelector(".add-to-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn--close-modal");
const openModelbtn = document.querySelector(".cta-btn");

const cartModal = document.querySelector(".cart-modal");
const navcartBtn = document.querySelector(".nav-cart-box");
const backToMenu = document.querySelector(".back-to-menu");

const openModal = function () {
  document.body.style.overflow = "hidden";
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

btnCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));

openModelbtn.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

// add to cart modal
const openCart = function () {
  document.body.style.overflow = "hidden";
  cartModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeCart = function () {
  cartModal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

navcartBtn.addEventListener("click", openCart);
backToMenu.addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);

btnCloseModal.forEach((btn) => btn.addEventListener("click", closeCart));

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

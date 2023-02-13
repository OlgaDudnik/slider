const dowmBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");
let activeSlideIndex = 0;

// @ts-ignore
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", up);
dowmBtn.addEventListener("click", down);

function up() {
  activeSlideIndex++;
  if (activeSlideIndex === slidesCount) {
    activeSlideIndex = 0;
  }
  calcHeight();
}

function down() {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesCount - 1;
  }
  calcHeight();
}

function calcHeight() {
  const height = container.clientHeight;

  // @ts-ignore
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  // @ts-ignore
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

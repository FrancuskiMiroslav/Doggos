/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
document.addEventListener("DOMContentLoaded", (function() {
  let wrapper = document.getElementById("wrapper");
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let delta = 0;

  wrapper.addEventListener("mousemove", (function(e) {
    /*    delta = (e.clientX - window.innerWidth / 2) * 0.5; */
    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + delta + "px";
  }));

  wrapper.addEventListener("touchmove", (function(e) {
    /* delta = (e.changedTouches[0].clientX - window.innerWidth / 2) * 0.5; */
    handle.style.left = e.changedTouches[0].clientX + delta + "px";
    topLayer.style.width = e.changedTouches[0].clientX + delta + "px";
  }));
}));

// carousel
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const carousel = document.querySelector(".carousel");

let firstSlide;
let lastSlide;

let slides = [
  {
    title: "Pera Perčina",
    type: "sandman",
    content: "lorem ipsum dolor",
    image: "../images/carousel/slide1.jpg"
  },
  {
    title: "Jaza Jazura",
    type: "",
    content: "lorem ipsum dolor",
    image: "../images/carousel/slide2.jpg"
  },
  {
    title: "Pera v Jaza",
    type: "Čortanovci",
    content: "lorem ipsum dolor",
    image: "../images/carousel/slide3.jpg"
  },
  {
    title: "Jaza",
    type: "",
    content: "lorem ipsum dolor",
    image: "../images/carousel/slide4.jpg"
  }
];

slides.forEach(({ title, type, content, image }, i) => {
  const slide = document.createElement("div");
  slide.classList.add("carousel__slide");
  slide.style.backgroundImage = "url(" + image + ")";

  if (i == 0) {
    firstSlide = slide;
    slide.classList.add("active");
  } else if (i + 1 == slides.length) {
    lastSlide = slide;
  }

  const slideContent = document.createElement("div");
  slideContent.classList.add("carousel__content");

  const contentTitle = document.createElement("h3");
  contentTitle.classList.add("carousel__title");
  contentTitle.textContent = title;

  const contentType = document.createElement("span");
  contentType.textContent = type;

  const contentContent = document.createElement("div");
  contentContent.classList.add("carousel__desc");
  contentContent.textContent = content;

  contentTitle.appendChild(contentType);
  slideContent.appendChild(contentTitle);
  slideContent.appendChild(contentContent);
  slide.appendChild(slideContent);

  carousel.appendChild(slide);
});

nextBtn.addEventListener("click", () => {
  const activeSlide = document.querySelector(".carousel__slide.active");
  let nextSibling = activeSlide.nextElementSibling;

  if (nextSibling == null) {
    nextSibling = activeSlide;
  }

  if (nextSibling.classList.contains("carousel__slide")) {
    activeSlide.classList.remove("active");
    nextSibling.classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  const activeSlide = document.querySelector(".carousel__slide.active");
  let nextSibling = activeSlide.previousElementSibling;
  console.log(nextSibling);

  if (nextSibling.classList.contains("carousel__slide")) {
    activeSlide.classList.remove("active");
    nextSibling.classList.add("active");
  }
});

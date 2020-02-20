/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
// dynamic landing page with clock
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  /* // set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 HOUR FORMAT
  hour = hour % 12 || 12; */

  // output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// add zero to min and sec
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set background and greeting and name
function setBgGreetName() {
  let today = new Date();
  hour = today.getHours();
  let header = document.querySelector("header");

  if (hour < 12) {
    // morning
    header.style.backgroundImage = "url(../images/morning.jpg)";
    greeting.textContent = "Dombro jutro";
    name.textContent = "ČupeDupe";
  } else if (hour < 18) {
    // afternoon
    header.style.backgroundImage = "url(../images/afternoon.jpg)";
    greeting.textContent = "Dombar dan";
    name.textContent = "JazaJazura";
  } else {
    // evening
    header.style.backgroundImage = "url(../images/evening.jpg)";
    greeting.textContent = "Dombro veče";
    name.textContent = "PeraPerčina";
  }
}

// Run time
showTime();
setBgGreetName();

// split/screen slider
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

// using fetch API method
fetch("./js/carousel.json")
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    // getting array from response and putting it in html
    data.slides.forEach(({ title, type, content, image }, i) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel__slide");
      slide.style.backgroundImage = "url(" + image + ")";

      if (i == 0) {
        firstSlide = slide;
        slide.classList.add("active");
      } else if (i + 1 == data.slides.length) {
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
  })
  .catch(err => console.error(err));

/* 
// using old method XMLHttp
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);
    //chcecking for response to see what it is
    console.log(response.slides);
    // getting array from response and putting it in html
    response.slides.forEach(({ title, type, content, image }, i) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel__slide");
      slide.style.backgroundImage = "url(" + image + ")";

      if (i == 0) {
        firstSlide = slide;
        slide.classList.add("active");
      } else if (i + 1 == response.slides.length) {
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
  }
};
xhttp.open("GET", "./js/carousel.json", true);
xhttp.send(); */

// event listeners for btns
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

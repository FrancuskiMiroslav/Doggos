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
    topLayer.style.width = e.changedTouches[1].clientX + delta + "px";
  }));
}));

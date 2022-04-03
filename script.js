const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
    console.log(element.offsetTop);
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});

const video = document.getElementsByClassName("videoDeFundo")[0];

function play() {
  video.play();
}
function pause() {
  video.pause();
}

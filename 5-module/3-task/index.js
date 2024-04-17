function initCarousel() {
  const carusel = document.querySelector(".carousel__inner");
  const arrowR = document.querySelector(".carousel__arrow_right");
  const arrowL = document.querySelector(".carousel__arrow_left");
  const slideWidth = carusel.offsetWidth;
  let distance = 0;

  arrowL.addEventListener("click", function () {
    distance += slideWidth;
    carusel.style.transform = `translateX(${distance}px)`;
  });
  arrowR.addEventListener("click", function () {
    distance -= slideWidth;
    carusel.style.transform = `translateX(${distance}px)`;
  });

  if (distance == 0) {
    arrowL.style.display = "none";
  } else {
    arrowL.style.display = "";
  }

  if (distance == -slideWidth * 3) {
    arrowR.style.display = "";
  } else {
    arrowR.style.display = "none";
  }
}

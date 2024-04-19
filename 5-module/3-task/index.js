function initCarousel() {
  const carusel = document.querySelector(".carousel__inner");
  const arrowR = document.querySelector(".carousel__arrow_right");
  const arrowL = document.querySelector(".carousel__arrow_left");
  const slideWidth = carusel.offsetWidth;
  let distance = 0;

  distance == 0 ? (arrowL.style.display = "none") : (arrowL.style.display = "");

  arrowL.addEventListener("click", () => {
    distance += slideWidth;
    carusel.style.transform = `translateX(${distance}px)`;
  });
  arrowR.addEventListener("click", () => {
    distance -= slideWidth;
    carusel.style.transform = `translateX(${distance}px)`;
    distance == -slideWidth * 3
      ? (arrowR.style.display = "none")
      : (arrowR.style.display = "");
  });
}

import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  templateSlide = () => {
    const carusel = this.elem.querySelector(".carousel__inner");
    this.slides.forEach((slide) => {
      let htmlstr = createElement(`
      <div class="carousel__slide" data-id="${slide.name}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price}</span>
          <div class="carousel__title">${slide.id}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `);

      carusel.append(htmlstr);
    });
  };

  templateBody = () => {
    return `
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      </div>
    </div>
    `;
  };
  slideMover = () => {
    const leftArrow = this.elem.querySelector(".carousel__arrow_left");
    const rightArrow = this.elem.querySelector(".carousel__arrow_right");
    const carousel = this.elem.querySelector(".carousel__inner");
    let distance = 0;
    const slideWidth = 500;
    const slidecouter = this.slides.length;

    distance == 0
      ? (leftArrow.style.display = "none")
      : (leftArrow.style.display = "");
    leftArrow.addEventListener("click", () => {
      distance += slideWidth;
      carousel.style.transform = `translateX(${distance}px)`;
    });
    rightArrow.addEventListener("click", () => {
      distance -= slideWidth;
      carousel.style.transform = `translateX(${distance}px)`;
      -1 * distance == slideWidth * (slidecouter - 1)
        ? (rightArrow.style.display = "none")
        : (rightArrow.style.display = "");
    });
  };

  clickbutton = () => {
    const allSllides = Array.from(
      this.elem.querySelectorAll(".carousel__slide")
    );
    allSllides.forEach((slide) => {
      let id = slide.getAttribute("data-id").split(" ").join("-").toLowerCase();
      let button = slide.querySelector(".carousel__button");
      button.addEventListener("click", () => {
        let event = new CustomEvent("product-add", {
          detail: id,
          bubbles: true,
        });

        this.elem.dispatchEvent(event);
      });
    });
  };

  render() {
    this.elem = createElement(this.templateBody());
    this.templateSlide();
    this.slideMover();
    this.clickbutton();
    return this.elem;
  }
}

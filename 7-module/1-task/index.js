import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  templateMain() {
    return `
    <div class="ribbon">    
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg"  alt="icon">
      </button>    
      <nav class="ribbon__inner">     
      </nav>    
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `;
  }

  templateLink = () => {
    const navTag = this.elem.querySelector(".ribbon__inner");
    this.categories.forEach((cat) => {
      let htmlStr = createElement(
        `<a href="#" class="ribbon__item" data-id="${cat.id}">${cat.name}</a>`
      );
      navTag.append(htmlStr);
    });
  };

  menuMover = () => {
    const arrowL = this.elem.querySelector(".ribbon__arrow_left");
    const arrowR = this.elem.querySelector(".ribbon__arrow_right");
    const menu = this.elem.querySelector(".ribbon__inner");

    arrowL.addEventListener("click", () => {
      menu.scrollBy(-350, 0);
      menu.srollLeft < 1
        ? arrowL.classList.add("ribbon__arrow_visible")
        : arrowL.classList.remove("ribbon__arrow_visible");
    });
    arrowR.addEventListener("click", () => {
      menu.scrollBy(350, 0);
      menu.scrollWidth - menu.scrollLeft - menu.clientWidth < 1
        ? arrowR.classList.add("ribbon__arrow_visible")
        : arrowR.classList.remove("ribbon__arrow_visible");
    });
  };
  defActive() {
    let defActive = this.elem.querySelector(".ribbon__item");
    defActive.classList.add("ribbon__item_active");
  }

  clickLink = () => {
    const butLinks = Array.from(this.elem.querySelectorAll(".ribbon__item"));
    butLinks.forEach((butLink) => {
      let id = butLink.getAttribute("data-id");
      butLink.addEventListener("click", (eventobj) => {
        eventobj.preventDefault();
        let prevSelected = this.elem.querySelector(".ribbon__item_active");
        prevSelected.classList.remove("ribbon__item_active");
        let event = new CustomEvent("ribbon-select", {
          detail: id,
          bubbles: true,
        });
        butLink.classList.add("ribbon__item_active");
        this.elem.dispatchEvent(event);
      });
    });
  };

  render = () => {
    this.elem = createElement(this.templateMain());
    this.templateLink();
    this.menuMover();
    this.defActive();
    this.clickLink();
    return this.elem;
  };
}

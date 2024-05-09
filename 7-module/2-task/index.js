import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.title = "";
    this.elem = this.template();
  }

  setTitle = (str) => {
    this.title = str;
    const tagToInsert = this.elem.querySelector(".modal__header");
    tagToInsert.innerHTML += `<h3 class="modal__title">
    ${this.title}
  </h3>`;
  };
  setBody = (domOBj) => {
    const tagToInsert = this.elem.querySelector(".modal__body");
    tagToInsert.appendChild(domOBj);
  };

  template() {
    return createElement(`
    <div class="modal">    
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">          
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          
        </div>
        <div class="modal__body">       
        </div>
      </div>
    </div>
    `);
  }

  open = () => {
    document.body.appendChild(this.elem);
    document.body.classList.add("is-modal-open");
    this.button();
    this.escClose();
  };

  close = () => {
    document.body.innerHTML = "";
    document.body.classList.remove("is-modal-open");
  };

  button() {
    document.querySelector(".modal__close").addEventListener("click", () => {
      document.body.innerHTML = "";
      document.body.classList.remove("is-modal-open");
    });
  }

  escClose = () => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        document.body.innerHTML = "";
        document.body.classList.remove("is-modal-open");
      }
    });
  };
}

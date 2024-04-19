// export default class UserTable {
//   #rows = [];
//   constructor(rows) {
//     this.#rows = rows;
//     this.elem = document.createElement("table");
//     this.elem.innerHTML = this.#templateTableHeader();
//     this.#templateTableBody();
//     this.#remover(this.elem);
//   }

//   #templateTableHeader() {
//     return `
//     <tr>
//       <th>Имя</th>
//       <th>Возраст</th>
//       <th>Зарплата</th>
//       <th>Город</th>
//       <th></th>
//     </tr>
//     `;
//   }

//   #templateTableBody() {
//     for (let i = 0; i < this.#rows.length; i++)
//       this.elem.innerHTML += `
//         <tr class='selectedRow'>
//           <td>${this.#rows[i].name}</td>
//           <td>${this.#rows[i].age}</td>
//           <td>${this.#rows[i].salary}</td>
//           <td>${this.#rows[i].city}</td>
//           <td><button data-action ="remove">X</button></td>
//         </tr>
//       `;
//   }

//   #remover(finalElem) {
//     const rows = Array.from(finalElem.querySelectorAll(".selectedRow"));
//     rows.forEach((row) => {
//       let button = row.querySelector('[data-action="remove"]');
//       button.addEventListener("click", () => {
//         row.remove();
//       });
//     });
//   }
// }
export default class UserTable {
  #rows = [];
  constructor(rows) {
    this.#rows = rows;
    this.elem = this.render();
  }

  #templateHeder() {
    return `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    `;
  }

  #setTextOfCells = () => {
    for (let i = 0; i < this.#rows.length; i++)
      this.elem.innerHTML += `
      <tr class='selectedRow'>
        <td>${this.#rows[i].name}</td>
        <td>${this.#rows[i].age}</td>
        <td>${this.#rows[i].salary}</td>
        <td>${this.#rows[i].city}</td>
        <td><button data-action ="remove">X</button></td>
      </tr>`;
  };

  remover = () => {
    const allRows = Array.from(this.elem.querySelectorAll(".selectedRow"));

    allRows.forEach((row) => {
      let button = row.querySelector('[data-action="remove"]');
      button.addEventListener("click", () => {
        row.remove();
      });
    });
  };

  render = () => {
    this.elem = document.createElement("table");
    this.elem.innerHTML = this.#templateHeder();
    this.#setTextOfCells();
    this.remover();
    return this.elem;
  };
}

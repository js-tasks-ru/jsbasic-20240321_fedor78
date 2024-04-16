function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let statusCell = table.rows[i].cells[3];
    let genderCell = table.rows[i].cells[2];
    let ageCell = table.rows[i].cells[1];
    let selectedRow = table.rows[i];
    if (statusCell.getAttribute("data-available") === "true") {
      selectedRow.classList.add("available");
    }
    if (statusCell.getAttribute("data-available") === "false") {
      selectedRow.classList.add("unavailable");
    }
    if (statusCell.getAttribute("data-available") === null) {
      selectedRow.setAttribute("hidden", "true");
    }
    if (genderCell.textContent == "m") {
      selectedRow.classList.add("male");
    }
    if (genderCell.textContent == "f") {
      selectedRow.classList.add("female");
    }
    if (ageCell.textContent < 18) {
      selectedRow.style.textDecoration = "line-through";
    }
  }
}

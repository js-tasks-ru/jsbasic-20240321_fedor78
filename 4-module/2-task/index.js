function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let dcell = table.rows[i].cells[i];
    dcell.style.background = "red";
  }
}

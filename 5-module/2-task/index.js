function toggleText() {
  const butelem = document.querySelector(".toggle-text-button");
  const textelem = document.getElementById("text");
  butelem.addEventListener("click", function () {
    if (textelem.hidden == true) {
      textelem.hidden = false;
    } else {
      textelem.hidden = true;
    }
  });
}

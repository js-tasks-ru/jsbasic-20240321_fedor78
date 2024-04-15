function camelize(str) {
  return str
    .split("-")
    .map(function (word, index) {
      return index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

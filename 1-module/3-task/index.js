function ucFirst(str) {
  if (str.lenght == 0) {
    return "";
  }
  let count = 0;
  let strFirstLatterUpper = "";
  for (i of str) {
    count += 1;
    if (count == 1) {
      strFirstLatterUpper += i.toUpperCase();
    } else {
      strFirstLatterUpper += i;
    }
  }
  return strFirstLatterUpper;
}

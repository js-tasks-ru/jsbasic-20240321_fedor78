function isEmpty(obj) {
  let count = 0;
  for (key in obj) {
    count += 1;
  }
  return Boolean(!count);
}

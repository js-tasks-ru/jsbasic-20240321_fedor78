function filterRange(arr, a, b) {
  let result = [];
  arr.map((item) => {
    if (item >= a && item <= b) {
      result.push(item);
    }
  });
  return result;
}

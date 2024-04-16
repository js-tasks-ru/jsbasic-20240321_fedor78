function getMinMax(str) {
  let min = 0;
  let max = 0;
  const res = str.split(" ").map((item) => {
    if (parseInt(item) < min) min = item;
    if (parseInt(item) > max) max = item;
  });
  return {
    min: parseFloat(min),
    max: parseFloat(max),
  };
}

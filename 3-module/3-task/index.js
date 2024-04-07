function camelize(str) {
  const res = str.split("-");
  if (res[0].length) {
    const finalstr = res
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("");
    return finalstr[0].toLowerCase() + finalstr.slice(1);
  }

  if (!res[0].length) {
    const finalstr = res
      .slice(1)
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("");
    return finalstr;
  }
}

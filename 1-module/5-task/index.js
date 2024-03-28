function truncate(str, maxlength) {
  let truncatedStr = "";
  let strFinish = "…";
  let count = 1;
  if (str.length > maxlength) {
    for (i of str) {
      count += 1;
      if (count <= maxlength) truncatedStr += i;
    }
    return truncatedStr + strFinish;
  } else {
    return str;
  }
}

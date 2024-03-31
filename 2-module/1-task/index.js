function sumSalary(salaries) {
  let result = 0;
  for (const key in salaries) {
    if (salaries[key] === parseInt(salaries[key])) result += salaries[key];
  }
  return result;
}

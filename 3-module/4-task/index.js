function showSalary(users, age) {
  str = "";
  users.map((user) => {
    if (user.age <= age) str += `${user.name}, ${user.balance}\n`;
  });
  return str.trim();
}

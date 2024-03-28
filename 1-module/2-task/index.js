/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name == null) {
    return false;
  }
  let lenght = 0;
  for (i of name) {
    lenght += 1;
    if (i == " ") {
      return false;
    }
  }
  if (lenght <= 3) {
    return false;
  }

  return true;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}

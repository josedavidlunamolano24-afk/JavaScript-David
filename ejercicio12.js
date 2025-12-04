// calculadora simple

function calcular(num1, num2, operador) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return null;
  }
  if (operador === "+") {
    return num1 + num2;
  } else if (operador === "-") {
    return num1 - num2;
  } else if (operador === "*") {
    return num1 * num2;
  } else if (operador === "/") {
    if (num2 === 0) {
      return null;
    }
    return num1 / num2;
  } else if (operador === "%") {
    if (num2 === 0) {
      return null;
    }
    return num1 % num2;
  } else {
    return null;
  }
}

console.log(calcular(3, 4, "*"));
console.log(calcular(3, 0, "/"));
console.log(calcular(6, 3, "%"));
console.log(calcular(5, 2, "+")); 
console.log(calcular(5, 2, "-"));
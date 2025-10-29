function calcular(num1, num2, operador) {
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error manito,no puedes dividir entre cero";
      }
      return num1 / num2;
    default:
      return "Error, el operador que ingresaste es invalido";
  }
}

console.log("Ejercicio 3: Calculadora");
console.log(`10 + 5 = ${calcular(10, 5, '+')}`);
console.log(`10 - 5 = ${calcular(10, 5, '-')}`);
console.log(`10 * 5 = ${calcular(10, 5, '*')}`);
console.log(`10 / 5 = ${calcular(10, 5, '/')}`);
console.log(`10 / 0 = ${calcular(10, 0, '/')}`);
console.log(`10 ? 5 = ${calcular(10, 5, '?')}`);
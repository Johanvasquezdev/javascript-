
// Ejercicio 1 convertidor de nota
function convertidorNota(nota) {
  if (nota >= 90) {
    return 'A';
  } else if (nota >= 80) {
    return 'B';
  } else if (nota >= 70) {
    return 'C';
  } else if (nota >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log("Ejercicio 1: Notas");
console.log(`Un 95 es una: ${convertidorNota(95)}`);
console.log(`Un 83 es una: ${convertidorNota(73)}`);
console.log(`Un 40 es una: ${convertidorNota(40)}`);


// Ejercicio 2 peliculas sin shrek
const peliculas = [
  "El Padrino",
  "Hobbit",
  "Interestelar",
  "The Avengers",
  "El Señor de los Anillos",
  "Shrek 3",
  "John Wick"
];

console.log("Ejercicio 2: Películas");

for (const pelicula of peliculas) {

  if (pelicula.includes('Shrek')) {
    continue; 
  }

  console.log(pelicula);
}



// Ejercicio 3 calculadora de 2 numeros
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
        return "Error manito, no puedes dividir entre cero";
      }
      return num1 / num2;
      break
  }
}

console.log("Ejercicio 3: Calculadora");
console.log(`10 + 5 = ${calcular(10, 5, '+')}`);
console.log(`10 - 5 = ${calcular(10, 5, '-')}`);
console.log(`10 * 5 = ${calcular(10, 5, '*')}`);
console.log(`10 / 5 = ${calcular(10, 5, '/')}`);
console.log(`10 / 0 = ${calcular(10, 0, '/')}`);
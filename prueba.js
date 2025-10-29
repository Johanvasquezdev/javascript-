function ConvertidorNota(nota) {
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
console.log(`Un 95 es: ${convertirCalificacion(95)}`);
console.log(`Un 83 es: ${convertirCalificacion(83)}`);
console.log(`Un 40 es: ${convertirCalificacion(40)}`);
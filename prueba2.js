const peliculas = [
  "El Padrino",
  "Hobbit",
  "Interestelar",
  "The Avengers",
  "El Señor de los Anillos",
  "Shrek 3"
];

console.log("Ejercicio 2: Películas");

for (const pelicula of peliculas) {

  if (pelicula.includes('Shrek')) {
    continue; 
  }

  console.log(pelicula);
}
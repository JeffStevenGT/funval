
/* let numeros = [6, 3, 7, 2, 7, 8, 1];
let doble = [];

for (let i = 0; i < numeros.length; i++) {
    doble.push(numeros[i] * 2);
}

console.log(doble); */

/* ITERAR USANDO FOREACH Y SACAR EL PROMEDIO DE TODOS LOS ESTUDIANTES DE FUNVAL
 */

/* let notasCracks = [100, 90, 10, 15, 67, 70, 0, 88];
let suma = 0;

notasCracks.forEach(nota => {
    suma += nota;
});

let promedio = suma / notasCracks.length;
console.log(`el promedio es: ${promedio}`);
 */




/* del array de estudiantes mostrar a todos los estudiantes que pertenezcan al pais de argentina */

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];


let estudiantesArgentinos = estudiantes.filter(estudiante => estudiante.pais === "Argentina");

console.log("studiantes de Argentina:", estudiantesArgentinos(estudiantes[0]));


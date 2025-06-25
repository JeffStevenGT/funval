/* console.log("Empezando a calentar el motor de la moto")

setTimeout(() => {
  console.log("El motor esta ready!")
}, 4000)

console.log("Mientras tanto voy buscando el casco")

setTimeout(() => {
  console.log("Listo para rutear")
}, 2000);
 */

// PROMETIO PAGARME

function Pagador() {
  let pago = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pago) {
        resolve("Ya no tengo plata");
      } else {
        reject("Me dijo que se quedo sin trabajo y no es autosuficiente aun");
      }
    }, 3000);
  });
}

Pagador()
  .then((datos) => console.log(datos))
  .catch((err) => console.log(err));


  /* COMO SE CREAN PROMESAS */

let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];
/* ella me prometio esperarme 2 años */
function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("me mando el querido Juan");
      }
    }, 7000);
  });
}
let lista = document.querySelector("#listado");
lista.innerHTML = `
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
`;
traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `<li><p>nombre: ${estudiante.nombre}</p>
      <p>edad:${estudiante.edad}</p></li>`;
    });
  })
  .catch((err) => console.log(err));
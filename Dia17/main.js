let btn = document.querySelector("#btn");
let img = document.querySelector("#imagen");


let imagenes = [
    "./img/2.png",  
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
    "./img/1.png",
];

let inicio = 0; 

btn.addEventListener("click", function () {

  let horas = ["9 AM", "11 PM", "1 PM", "3 PM", "5 PM", "7 PM", "9 PM", "11 PM", "7 AM"];

  btn.textContent = horas[inicio];
 
  img.setAttribute("src", imagenes[inicio]);

  inicio = (inicio + 1) % imagenes.length;
});

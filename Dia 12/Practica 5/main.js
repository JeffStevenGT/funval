let operacion = prompt(`Seleccione la operacion que desea realizar:
    1: Calcular el área de un cuadrado.
    2: Calcular el área de un rectángulo.
    3: Calcular el área de un triángulo.`);


if (operacion === "1") {
    let lado = parseFloat(prompt("ingrese el lado del cuadrado"));
    alert("el area del cuadrado es: " + (lado * lado));
}   else if (operacion === "2") {
    let base1 = parseFloat(prompt("ingrese la base del rectangulo "));
    let altura1 = parseFloat(prompt("ingrese la altura del rectangulo "));
    alert("el area del rectangulo es: " + (base1 * altura1));
}   else if (operacion === "3") {
    let base = parseFloat(prompt("ingrese la base del triangulo "));
    let altura = parseFloat(prompt("ingrese la altura del triangulo "));
    alert("el area del triangulop es: " + (base * altura)/2);    
} else {
    alert("la opcion no es valida ._.! intenta nuevamente!")    
}
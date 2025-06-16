// aqui podemos poner comentarios en una sola fila

/*ya 
puedo
poner
comentarios
multi-linea */

/* console.log  LA MANERA DE MOSTRAR COSAS EN CONSOLA */

console.log("HOLA MUNDO");

console.log(3 + 2);

console.log("hola mundo y amigos de funval");

let var1 = 12;

console.log(var1);

/* CREACION DE VARIABLES Y CONSTANTES */

// var
var pepito = "hola pepito"; //NO DEBE USARSE POR EL SCOPE GLOBAL Q TIENE
console.log(pepito);
// let
let juanito = "hola juanito";
console.log(juanito);
juanito = 77;
console.log(juanito);
//const
const pedrito = "hola pedrito";
console.log(pedrito);
// pedrito = "hola kevin"; NO SE PUEDE REASIGNAR UNA CONSTANTE!!!!!!
/* lower CAMEL CASE */
let apellidoPaterno;
let apellidoMaterno;
let apellidoPaternoAbuelo;

/* TIPOS DE DATOS PRIMITIVOS */
// TENEMOS 7 TIPOS DE DATOS PRIMITIVOS

/* STRING */
let nombre = "Kevin"; // string o cadena de texto
let apellido = "Rodriguez Calderon"; // se toma todos los caracteres incluyendo los espacios

/* NUMBER */
let enteros = 12; //enteros
let decimales = 45.5; //flotantes o decimales
let negativo = -15; //negativos

/* BOOLEAN */
let johan = true; //o es verdadero
let nojohan = false; // o es falso

/* UNDEFINED */
let indefinida;

/* NULL */
let valor_null = null;

/* symbol */
let simbolo = Symbol("numerico2");

/* BIG INT */
let numeroGrande = 21348734958439567349879813749812798347129847912847n;
let numeroGrande2 = BigInt(21348734958439567349879813749812798347129847912847);

console.log(typeof nombre);
console.log(typeof enteros);
console.log(typeof johan);
console.log(typeof indefinida);
console.log(typeof valor_null);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

// 1. Escribe un comentario en una línea
// Hola profe Kevin!

// 2. Escribe un comentario en varias líneas
/* Profe kevin
apruebeme xfa */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let apodo = "jeff";
let numeroCasa = 178;
let Sud = true;
let indefined;
let valor_nulo = null;
let simbol = Symbol ("&")
let numeroMuyGrande = 6366236723672367236723672376326732673236723763276237623673276326

// 4. Imprime por consola el valor de todas las variables
console.log(apodo);
console.log(numeroCasa);
console.log(Sud);
console.log(indefined);
console.log(valor_nulo);
console.log(simbol);
console.log(numeroMuyGrande);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof apodo);
console.log(typeof numeroCasa);
console.log(typeof Sud);
console.log(typeof indefined);
console.log(typeof valor_nulo);
console.log(typeof simbol);
console.log(typeof numeroMuyGrande);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
apodo = "jefito";
numeroCasa = 200;
Sud = false;
indefined;
valor_nulo = null;
simbol = Symbol ("*")
numeroMuyGrande = 634634643646346436346436436436346346

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
apodo = 200;
numeroCasa = "once";
Sud = Symbol ("$");
indefined;
valor_nulo = null;
simbol = false
numeroMuyGrande = "634634643646346436346436436436346346"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const name = "jeff"
const diaNacimiento = 12;
const miembroSUD = true;
const valorNulo = null;
const tipoSimbolo = Symbol ("@")
const numeroExtremadamenteGrande = 575754785478090101010010101010101010101101010

// 9. A continuación, modifica los valores de las constantes
//no se puede

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

let cita = true;
let pagoTramiteVirtual = true;
let pagoTramite = true;
let bolsaViaje = true;


let pasaporte = cita && (pagoTramiteVirtual || pagoTramite);

let viajeInternacional = pasaporte && bolsaViaje;

console.log(viajeInternacional);



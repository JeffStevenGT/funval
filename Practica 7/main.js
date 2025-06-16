let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla gamer facherita", precio: 450 },
  { nombre: "Audifonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "Usb 128gb", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tableta", precio: 500 }
];

// Recorrer y mostrar productos
console.log("Productos:");
productos.forEach(producto => {
  console.log(`Nombre: ${producto.nombre}, Precio: s/${producto.precio}`);
});

// Crear un array de nombres de productos y verificar la disponibilidad
let productosDisponibles = productos.map(producto => producto.nombre);
console.log("Nombres de productos disponibles:", productosDisponibles);

let productoBuscado = "Teclado";
let estaDisponible = productosDisponibles.includes(productoBuscado);
console.log(`${productoBuscado} esta disponible?`, estaDisponible);

// Aplicar un descuento a los productos con "map"
let productosConDescuento = productos.map(producto => ({
  nombre: producto.nombre,
  precio: producto.precio * 0.9
}));
console.log("Productos con 10% de descuento:");
console.log(productosConDescuento);

// Filtrar productos por precio con "filter"
let productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a 100 soles:");
console.log(productosBaratos);

// Obtener los primeros productos con "slice"
let primerosDosProductos = productos.slice(0, 2);
console.log("Primeros 2 productos:");
console.log(primerosDosProductos);

// Ordenar productos por precio con "sort"
let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Prodctos ordenados por precio de menor a mayor:");
console.log(productosOrdenados);

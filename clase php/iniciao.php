<?php
// BASICO
class Persona {
    public $nombre;
    public $edad;

    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    public function presentarse() {
        return "Hola, soy $this->nombre y tengo $this->edad años.";
    }
}


// INTERMEDIO

class Estudiante extends Persona {
    public $carrera;

    public function __construct($nombre, $edad, $carrera) {
        parent::__construct($nombre, $edad);
        $this->carrera = $carrera;
    }

    public function presentarse() {
        return parent::presentarse() . " Estudio la carrera de $this->carrera.";
    }
}

// Ejemplo
$estudiante = new Estudiante("Jeff", 25, "Ingeniería de Software");
echo $estudiante->presentarse();

//AVANZADO

class Tienda {
    private $productos = [];

    public function agregarProducto($producto) {
        $this->productos[] = $producto;
    }

    public function eliminarProducto($producto) {
        $index = array_search($producto, $this->productos);
        if ($index !== false) {
            unset($this->productos[$index]);
            $this->productos = array_values($this->productos);
        }
    }

    public function listarProductos() {
        return $this->productos;
    }
}

// Ejemplo
$miTienda = new Tienda();
$miTienda->agregarProducto("Laptop");
$miTienda->agregarProducto("Mouse");
$miTienda->eliminarProducto("Mouse");

print_r($miTienda->listarProductos());

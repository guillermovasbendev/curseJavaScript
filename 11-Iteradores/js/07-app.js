// iterador for ...of
const pendientes = [
  `tarea`,
  `comer`,
  `trabajar en proyecto`,
  `estudiar JavaScript`,
];

// se pone let y el nombre del arreglo (pendientes), luego se pone of y se le da un alias en este caso(pendientes)
for (let pendiente of pendientes) {
  console.log(pendiente); //se recorren los objetos del array
}

var carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100 },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];

for (let producto of carrito) {
  console.log(producto.nombre);
}

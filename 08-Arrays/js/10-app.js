// diferencia entre forEach y maps

var carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100 },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];
//   la sintaxis de maps es la misma
const nuevoArreglo = carrito.map(function (producto) {
  return `el producto ${producto.nombre} tiene un valor de ${producto.precio}`;
});

const nuevoaArreglo2 = carrito.forEach(function (producto) {
  return `el producto ${producto.nombre} tiene un valor de ${producto.precio}`;
});

// la diferencia es que map crea un nuevo arreglo, como si fuera otra variable
console.log(nuevoArreglo);
console.log(nuevoaArreglo2);

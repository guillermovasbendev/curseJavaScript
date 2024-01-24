// metodos de arreglos
var carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100 },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];

for (i = 0; i < carrito.length; i++) {
  console.log(
    ` el producto ${carrito.nombre} tiene un valor de ${carrito.precio}`
  );
}
// se puede iterar usando el metodo forEach que es una funcion
carrito.forEach(function (producto) {
  console.log(
    `el producto ${producto.nombre} tiene un valor de ${producto.precio}`
  );
});

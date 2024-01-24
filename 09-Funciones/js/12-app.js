// arrow function forEach y map
const carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100 },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];

// se usa en el parametro de la funcion map la funcion arrow pasandole como parametro el array producto
// const nueoArreglo = carrito.map((producto) => {
//   return `${producto.nombre} - precio:${producto.precio}`;
// });

// incluso se puede eliminarel return (se da por implicito en una sola linea) y los {}, ya que es solo una linea(segun reglas de funciones), y se conserva el mismo resultado
const nueoArreglo = carrito.map(
  (producto) => `${producto.nombre} - precio:${producto.precio}`
);

carrito.forEach((producto) => {
  return `${producto.nombre} - precio:${producto.precio}`;
});

console.log(nueoArreglo);
console.log(nueoArreglo2);

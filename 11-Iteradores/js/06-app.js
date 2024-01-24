// iterador for each ideal para recorrer arreglos
// se ejecuta al menos una vez si hay un elemento en el arreglo
const pendientes = [
  `tarea`,
  `comer`,
  `trabajar en proyecto`,
  `estudiar JavaScript`,
];

pendientes.forEach((pendiente, i) => {
  //es un arrow function
  //se puede agregar el index (i) despues de la coma como segundo parametro, el primer parametro funciona con cualquier alias
  console.log(`${i}:${pendiente}`);
});

var carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100 },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];

const arreglo = carrito.forEach((producto) => {
  console.log(producto.precio);
});
// no crea un arreglo nuevo

const nuevoArreglo = carrito.map((producto) => {
  console.log(producto.nombre);
});
//   crea un arreglo nuevo

console.log(arreglo); // aparecera vacio (undefined)
console.log(nuevoArreglo); //mostrara la iteracion del arreglo

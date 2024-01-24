//filter
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//filtra de acuerdo a la condicion

// si queremos traer todos los productos que cuestan mas de 400 en el carrito

let resultado = carrito.filter((producto) => producto.precio > 400);
console.log(resultado);
// retorna como resultado un objeto que contiene los productos en este caso el celular y el monitor

// Ahora los precios menores a 600
let resultado2 = carrito.filter((producto) => producto.precio < 600);
console.log(resultado2);
// retorna como resultado un objeto que contiene los productos menores a 600 en este caso un objeto con 5 productos

// se puede eliminar del DOM por ejemplo audifonos
let resultado3 = carrito.filter((producto) => producto.nombre != `Audifonos`);
console.log(resultado3);
// trae un objeto con todo menos audifonos

// se puede buscar
let resultado4 = carrito.filter((producto) => producto.nombre === `Audifonos`);
console.log(resultado4);
// trae un objeto con lo buscado audifonos

//reduce
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// primero con un forEach
let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// toma gran variedad de datos los reduce y entrega un resultado

// ahora con un reduce
//solo se usa  y no += por que se mantiene el valor previo
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
// el primer parametro es la variable donde se guarda(total) que el valor previo , el segundo parametro es lo que se suma (producto o producto.precio) seria el valor actual es decir despues de que ocurrio la suma

// al final despues de la ultima coma se puede poner el valor de inicio para este caso (0)
console.log(resultado);

// las ventajas de reduce es que no crea variables extras

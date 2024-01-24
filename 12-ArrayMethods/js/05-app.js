//find
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un for each
let resultado = ``;
carrito.forEach((producto, index) => {
  if (producto.nombre === `Tablet`) {
    resultado = carrito[index];
  }
});
console.log(resultado);

// con un .find
//find crea un nuevo objeto que guarda lo que se busca
let resultado2 = ``;
carrito.find((producto, index) => {
  if (producto.nombre === `Tablet`) {
    resultado2 = carrito[index];
  }
});
console.log(resultado2);
// find retorna el primer elemento que cumpla la condicion

//findIndex
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
// de forma manual con forEach se busca Abril su indice
meses.forEach((mes, index) => {
  if (mes === `Abril`) {
    console.log(`encontrado en el indice ${index}`);
  }
});

// encontrar el indice con findIndex(estos metodos son arrow functions)
const indice = meses.findIndex((mes) => mes === `Abril`);
console.log(indice);
// retorna el numero del indice, para este caso
// si no encuentra el valor el retorna -1

// encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex(
  (producto) => producto.nombre === `Televisión`
);
console.log(indice2); //retorna el indice que para television es 1
// si existieran 2 productos con el mismo nombre solo diria que 1 ya que al encontrarlo no sigue buscando

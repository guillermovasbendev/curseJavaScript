// spread operator
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
// Agregar un elemento mas al string de meses
const nuevo = [...meses, `Agosto`];
// se agrega sin los 3 puntos
console.log(nuevo);
// Se crea un arreglo nuevo
console.log(meses);
// sigue estando igual sin agosto
// si se modifica el orden en la linea 13 primero Agosto, y luego meses se realizara en ese orden Agosto, enero, febrero, marzo etc.

// para agregar al  ARRAY DE objetos
// PRIMERO SE CREA UN NUEVO ELEMENTO
const nuevoElemento = {
  Producto: `Disco duro`,
  precio: 300,
};

const todoObjeto = [...carrito, nuevoElemento];

// primero se trae el objeto principal con el spread operator (...), y luego el elemento a añadir

console.log(todoObjeto);
// si se le ponen spread operator a el array de objetos, dara error ya que el nuevo no es iterable

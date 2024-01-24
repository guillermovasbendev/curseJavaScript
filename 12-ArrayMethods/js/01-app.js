//some
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// revisar si un valor existe dentro del arreglo
meses.forEach((mes) => {
  if (mes === `Enero`) {
    console.log(`El mes de enero existe`);
  }
});

// includes busca si el valor existe en el arreglo de solo indices
const existe = meses.includes(`Enero`);
console.log(existe);
// retorna true o false si existe o no existe respectivamente

// en un arreglo de objetos se usa .some
const pertenece = carrito.some((producto) => {
  // se le da un alias al nombre de la constante
  return producto.nombre === `perro`; //se evalua la condicion de existencia o no dentro del objeto
});
console.log(pertenece); //retorna un true o false si existe o no existe

// en un arreglo de indices tambien funciona some
const existe2 = meses.some((mes) => mes === `Febrero`);
console.log(existe2);

const carrito = [];

const producto1 = {
  nombre: `celular`,
  precio: 5000,
};

const producto2 = {
  nombre: `tablet`,
  precio: 6000,
};

const producto3 = {
  nombre: `televisor`,
  precio: 3000,
};

console.table(carrito);

// en las nuevas versiones de javaScript existen dos funciones que hacen los mismo declarativas e imperativas
// la iterativa trabaja como hemos visto hasta ahora, sobre ella misma se modifica y trabaja los datos

// la sintaxis declarativa, no es tan claro se usa el spread operator y  se declara una nueva variable, la forma declarativa esta asociada con la programacion funcional

const resultado = [...carrito, producto3];

// si quiero algo como unshift, Para almacenar al inicio o al final simplemente cambio el spread operator al inicio o al final se invierte asi:
const resultadoNuevo = [producto2, ...carrito];
console.table(resultadoNuevo);

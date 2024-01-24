`use strict`;

const objeto = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};
// congelar un objeto para que no se  modificable se usa use strict  (hace que no se usen malas practicas, es decir requerira de cada paso para hacerefectivo el codigo)

Object.freeze(objeto); //acequeno sea posible modificar el objeto, ni modificar, ni agregar ni quitar

console.log(Object.isFrozen(objeto)); //se usaparapreguntar si el objeto esta inhabilitado para modificar, retorna true o false

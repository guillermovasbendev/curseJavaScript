// eliminar elementos de un arreglo
const elemento = [`enero`, `febrero`, `Marzo`];
console.table(elemento);
const elemento2 = [
  `lunes`,
  `martes`,
  `miercoles`,
  `jueves`,
  `viernes`,
  `sabado`,
  `domingo`,
];
console.table(elemento2);

// eliminar del final con pop
elemento.pop();
console.table(elemento);

// eliminar del inicio con shift

elemento2.shift();
console.table(elemento2);

// eliminar de indice con splice, recibe dos parametros, el primero es la posicion, y el segundo cuantos elementos quieres eliminar
elemento2.splice(1, 1);
console.log(elemento2);

// splice puede reemplazar shift y pop, con el cambio de posicion al del inicio o el del final.

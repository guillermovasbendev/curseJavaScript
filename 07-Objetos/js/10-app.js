// copiar dos objetos
`use strict`;

const objeto = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};

const medidas = {
  peso: `1kg`,
  medida: `1m`,
};

console.log(objeto);
console.log(medidas);
// a continuacion mediante assign se suman los dos objetos y se guardan en un tercero
const resultado = Object.assign(medidas, objeto);
console.log(resultado);

// se puede conseguir el mismo resultado con spread operator o rest operator

const resultado2 = { ...objeto, ...medidas };
console.log(resultado2);

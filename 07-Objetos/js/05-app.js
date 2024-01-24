// objetos dentro de objetos
const object = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
  informacion: {
    peso: `1kg`,
    medida: `1m`,
  },
};
// para definir un objeto dentro de un objeto se debe poner : para la definision del mismo
console.log(object.informacion.peso);

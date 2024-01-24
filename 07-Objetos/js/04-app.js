const object = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};

const nuevoNombre = object.nombre;
console.log(nuevoNombre);
//   destructuring de objeto es que mediante la sintaxis
// const { pulgadas } = object;
// console.log(pulgadas);
// se puede extraer el valor indicandole de donde se saco en este caso el objeto object
// si separamos mediante , estamos destructurando cada valor del objeto object
const { nombre, pulgadas, precio } = object;
console.log(nombre);
console.log(pulgadas);
console.log(precio);

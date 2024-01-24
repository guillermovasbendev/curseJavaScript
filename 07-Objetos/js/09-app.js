`use strict`;

const objeto = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};

Object.seal(objeto); //no se agregan ni eliminan las propiedades, pero si se pueden modificar las existentes

objeto.pulgadas = 0;
objeto.disponible = false; //no se ejecuta por el seal
delete objeto.nombre; //no se ejecuta por el seal

console.log(objeto);

console.log(Object.isSealed(objeto));
// con la linea anterior podremos saber si el objeto esta sellado con seal

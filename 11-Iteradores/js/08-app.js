// iterador for ...in (ideal para iterar objetos)
const pendientes = [
  `tarea`,
  `comer`,
  `trabajar en proyecto`,
  `estudiar JavaScript`,
];

for (pendiente in pendientes) {
  console.log(pendiente);
}
// ]como resultado solo se obtienen los indices 0,1,2,3,4

const automovil = {
  modelo: `camaro`,
  year: 1984,
  motor: `v8`,
};

for (caracteristica in automovil) {
  console.log(`${automovil[caracteristica]}`); //para que revise el valor de cada propiedad camaro, 984,v8
}
// recorre cada una de las propiedades de un objeto

// la siguiente es otra forma de hacer lo mismo
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(valor); //obtiene el valor
  console.log(llave); //obtiene la llave
}

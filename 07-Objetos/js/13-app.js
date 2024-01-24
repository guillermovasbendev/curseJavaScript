const objeto = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};
// con keys se muestran en llaves [ ] los valores o keys del objeto: nombre, pulgada, precio
console.log(Object.keys(objeto));
// con value se muestran en llaves [ ] los valores de las keys del objeto: televisor, 26, 3222
console.log(Object.values(objeto));
// con entries se muestran en llaves [ ] los valores del objeto televisor, 26, 3222 y los keys en pares es decir la key y su valor
console.log(Object.entries(objeto));

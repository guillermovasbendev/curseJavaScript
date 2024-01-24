const object = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};
// agregar propiedades a un objeto
//se le agrega al nombre del objeto con (.) la propiedad y con igual se le da el valor
object.imagen = "solo un string";
// eliminar valor de un objeto
delete object.nombre;
console.log(object);

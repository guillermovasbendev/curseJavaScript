const object = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};
// los  objetos declrados con const si pueden ser reasigados
object.precio = 4444;
console.log(object);
//si se produce un cambi o añadido a las propiedades o valores de las keys a pesar de ser declaradas con const estas si sucederan

// Object literal
const objeto = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
};
// object constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}
// queda creado un producto (con mayuscula linea 8), y con this se definen sus caracteristicas nombre precio y disponible

const producto2 = new Producto(`tv de 50 pulgadas`, 854844);
// el nuevo producto recibe 2 parametros nombre y precio, por defecto disponible es true
console.log(producto2);

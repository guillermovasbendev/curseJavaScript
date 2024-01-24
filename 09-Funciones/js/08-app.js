// funciones que retornan valores
function sumar(a, b) {
  return a + b;
}
// debe tener una variable a la que se le asigna el valor consultado
const resultado = sumar(3, 2);

console.log(resultado);

// otro ejemplo
let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function agregarImpuesto(total) {
  return total * 1.19;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(300);

const totalPagar = agregarImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(`El carrito tiene un total de ${total}`);

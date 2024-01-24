// for loop el codigo se ejecuta hasta que se deja de cumplir una condicion
// tres condiciones como parametro, primero inicia el iterador, segunda condicion a evaluar, tercera incremento
for (let i = 0; i < 10; i++) {
  console.log(`numero ${i}`);
}
// identificar numeros pares y nones
for (i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es un numero par`);
  } else {
    console.log(`${i} es un numero impar`);
  }
}
// for utiles para recorrer arreglos

var carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100 },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];
// console.log(carrito[0]);
// console.log(carrito.length);
for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i]);
}
// Se recorre cada parte del carrito

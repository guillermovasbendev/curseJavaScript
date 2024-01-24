// crear un for loop que al llegar al numero 5 detenga su ejecucion
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`este es el 5`);
    console.log(`cinco`);
    //break; //para detener la ejecucion se usa un break
    continue; //va a hacer lo que dice el codigo y continuar ejecutandose
  }
  console.log(`el numero es ${i}`);
}

var carrito = [
  { nombre: `monitor 20 pulgadas`, precio: 5000 },
  { nombre: `anillo`, precio: 4000 },
  { nombre: `celular`, precio: 2000 },
  { nombre: `tablet`, precio: 100, descuento: true },
  { nombre: `escritorio`, precio: 650 },
  { nombre: `smartwatch`, precio: 3040 },
];

for (i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`el producto ${carrito[i].nombre}, tiene un descuento `);
  }
  console.log(carrito[i]);
}

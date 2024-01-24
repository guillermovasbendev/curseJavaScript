// el metodo Math
let resultado;
// pi
resultado = Math.PI;
// para redondear usamos Math.round, pasando como parametro lo que ueremos redondear
resultado = Math.round(3.786); //redondea por encima o debajo por donde este mas cercano teniendo el .5 como referencia

// para redondear usamos Math.ceil, pasando como parametro lo que queremos redondear hacia arriba siempre
resultado = Math.ceil(3.786);

// para redondear usamos Math.floor, pasando como parametro lo que queremos redondear hacia abajo siempre
resultado = Math.ceil(2.9);

// raiz cuadrada
resultado = Math.sqrt(64);

// valor absoluto
resultado = Math.abs(-64);

//  potenciacion
resultado = Math.pow(8, 2);

// valor minimo
resultado = Math.min(8, 2);

// valor max
resultado = Math.max(8, 2);

// valor random
resultado = Math.random();
// da muy pocas veces numeros enteros

// numero aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30);

console.log(resultado);

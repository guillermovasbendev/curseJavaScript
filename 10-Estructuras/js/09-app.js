// evaluando con un operador ternario
const autenticado = true;
const puedePagar = false;

console.log(autenticado ? `si esta autenticado` : `no esta autenticado`);
// si quiero que no haga nada despues de los dos puntos coloco :null

console.log(
  autenticado && puedePagar
    ? `si esta autenticado`
    : `no esta autenticado o no puede pagar`
);
// para revisar dos condiciones

// podemos tener if dentro de if (anidados) en operadores ternarios anidados

console.log(
  autenticado
    ? puedePagar
      ? `si puede pagar`
      : `si autenticado pero no puede pagar`
    : `no puede pagar`
);

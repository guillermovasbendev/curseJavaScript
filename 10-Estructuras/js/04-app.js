// else if otra forma de revisar
const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;

if (dinero > totalAPagar) {
  console.log(`tenemos mas dinero quelo que se paga`);
} else if (tarjeta == true) {
  console.log(`Puedo pagar con tarjeta`);
} else {
  console.log(`no puedo pagar`);
}
// cuando se tiene un else if, se ejecuta la primera opcion que se cumpla

// else solo seejecuta si ninguna de las condiciones previas se cumple

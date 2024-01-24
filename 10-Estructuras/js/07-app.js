// lacondicion or || revisaque una de las condiciones sea cierta
const efectivo = 300;
const credito = 1200;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
  console.log(`si se puede pagar`);
} else {
  console.log(`fondosinsuficientes`);
}

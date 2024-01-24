// Operador & o compuerta and
// revisa doble condicion &&
const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log(`Puede realizar la transaccion`);
} else if (!usuario) {
  console.log(`no eres usuario`);
} else if (!puedePagar) {
  console.log(`fondos insuficientes`);
} else {
  console.log(`No puedes realizar la transaccion`);
}

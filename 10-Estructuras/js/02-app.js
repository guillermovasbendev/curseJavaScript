// otras formas de comparacion
const puntaje = 1000;
const puntaje2 = "100";

console.log(typeof puntaje);
console.log(typeof puntaje2);

if (puntaje != 1000) {
  //diferente de (!=) se usa !===(el operador estricto) y !== (el operador noestricto)
  console.log(`si es diferente de mil`);
} else {
  console.log(`no es diferente de mil`);
}

const numero1 = "uno";
const numero2 = 1;
// con tres igual === compara hasta si el tipo de dato es igual(operador estricto)
// produce false
if (numero1 === numero2) {
  console.log(`es igual`);
}
// con 2 igual un string "1000" es igual a un numero 1000 (operador no estricto)
// produce true
if (numero1 == numero2) {
  console.log(`es igual`);
}

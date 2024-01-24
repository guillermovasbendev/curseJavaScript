// funciones y metodos con numeros
let numero1 = "1";
let numero2 = "1.2";
let numero3 = "uno";
let numero4 = 1;
// let numero5 = "1";
// convertir de string a numero
console.log(numero1);
console.log(Number.parseInt(numero1));

// los numeros decimales los convierte de string a numero (pero numero entero)  es decir que elimina su parte decimal
console.log(Number.parseInt(numero2));

//para convertirlo a numero flotante, es decir con decimales se usa parseFloat
console.log(Number.parseFloat(numero2));

// si el numero esta escrito el caso de numero3="uno", y tratamos de convertirlo dara como resultado NaaN ya que numero 3 no es un numero.

// console.log(parseInt(numer3));
// presenta el error subrayado y el navegador lanza error de que no esta definido

// se puede preguntar
console.log(Number.isInteger(numero2));
// Recordar el metodo number siempre en mayuscula (Number)
// respondera con true o false

// metodos para los string
const frase = "este es un string";

// saber cuan largo es un string
console.log(frase.length);

// saber si el string tiene dentro la palabra (indexof(palabra))
console.log(frase.indexOf("un"));
// y nos devuelve la posicion dentro del string, si regresa -1 esta diciendo que no se encontro la palabra

console.log(frase.includes("string"));
// regresa la respuesta en un valor booleano, si esta True y si no esta en False (distingue entre mayusculas y minusculas buscara exactamente la palabra)

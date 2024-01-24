// unir dos textos, tambien es llamado concatenar

const elemento = "televisor";
const precio = " vale 40 dolares";
const nombre = "Guillermo";

// usando concat
console.log(elemento.concat(precio));
// la ventaja de usar este tipo de concatenacion es que suma la frase al final
console.log(nombre.concat(precio));
console.log(nombre.concat(" y ademas esta frase"));

// ]concatenar usando el simbolo +
console.log(precio + " " + elemento);

// template string o template literals (uso de la comilla inclinada`` backtick y ${})

console.log(`el ${elemento} es propiedad de ${nombre}`);
// las variables se agregan co ${}, lo que se encuentra dentro de lo dema sigue siendo una cadena de texto ``

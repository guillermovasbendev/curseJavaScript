let phrase = "              Esto es un string                  ";
// metodo para eliminar un string al inicio y al final de una cadena de texto
console.log(phrase);
console.log(phrase.length);
// metodo para eliminar un string al inicio
console.log(phrase.trimStart());
console.log(phrase.length);
// metodo para eliminar un string al final
console.log(phrase.trimEnd());
console.log(phrase.length);

// usando chaining o encadenamiento de metodos se puede usar trimEnd y trimStar
let phraseNew = "              Esto es un nuevo string                  ";
console.log(phraseNew);
console.log(phraseNew.length);
console.log(phraseNew.trimEnd().trimStart());

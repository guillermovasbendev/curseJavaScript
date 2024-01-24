// query selector all
// funciona igual que el anterior con especificidad por <html, por estilo CSS o por ID
let cards = document.querySelectorAll(`.card`);
// es importante seleccionar el punto(.)
console.log(cards);
// (retorna todos los elementos del selector) retorna un node list algo similar a un arreglo
let formulario = document.querySelectorAll(`.formulario`);
// es importante seleccionar el punto(.)
console.log(formulario);

// si llamamos uno que no existe retorna un nodeList vacio
let noExiste = document.querySelectorAll(`.noexiste`);
// es importante seleccionar el punto(.)
console.log(noExiste);

// seleccionar con querySelector
// el parametro se pasa como si fuera una clase en css
let cards = document.querySelector(`.card`);
// es importante seleccionar el punto(.)
console.log(cards);

// Para seleccionar estilo arbol, es decir hijos de un contenedor HTML anterior dentro de los parentesis se pone(`.padre` espacio `.hijo`)

let SelecciontipoArbol = document.querySelector(`.premium .info`);
// es importante seleccionar el punto(.)
console.log(SelecciontipoArbol);

// si se quiere seleccionar un elemento que este contenido dentro de un padre y existan varios de esos items, se usa n-child indicando a cual de ellos se refiere

const segundoParrafo = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
); //funciono con comillas dobles

// escribirlo en la consola
console.log(segundoParrafo);

//querySelector permite seleccionar clases y ID
const formulario = document.querySelector("#formulario");
console.log(formulario);
//en el argumento se pueden mesclar clases y ID para mas especificidad

// tambien se puede usar elementos html como nav
const navegacion = document.querySelector("nav");
console.log(navegacion);

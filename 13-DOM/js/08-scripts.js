// // traversing de DOM=es navegar el DOM,viajar por el
// const navegacion = document.querySelector(".navegacion");(comento por que se usa mas adelante)
// console.log(navegacion);
// /muestra los nodos, es decir el elemento padre con sus elementos hijos

const navegacion1 = document.querySelector(".navegacion");
console.log(navegacion1.childNodes);
// // los espacios en blanco son considerados elementos(se convierten en elementos automaticamente), es decir los enter dentro de HTML si se elimina el salto de linea(enter) en el HTML desaparece elelemento anterior

const navegacion2 = document.querySelector(".navegacion");
console.log(navegacion2.children);
// children lista los elementos reales

// // se puede listar el objeto usando [0] o el elemento que se requiera qu este dentro del TML colection (es como un objeto)
console.log(navegacion2.children[0]);

console.log(navegacion2.children[0].nodeName);
//  devuelve la etiqueta A en la consola
console.log(navegacion2.children[0].nodeType);
//existe un codigo en developer mozilla.org/node/nodetype donde el 1se refiere a elemento de nodo y es lo que regresa la consola

// // ahora seleccionando un card
const card = document.querySelector(".card");
console.log(card.children[1].children[1].textContent);
// Este viaje dentro de cada etiqueta padre, y los nodos que contiene dentro a travez de la posicion del objeto es el traveling in the DOM y el .textcontent traeria el texto en la consola

// se puede cambiar el heading desde traveling the dom seleccionando y dandole el nuevo valor
card.children[1].children[1].textContent =
  "se cambio el heading desde traveling in the DOM";

//Traversing del hijo, hacia el padre
console.log(card.parentNode); //elimina el elemento anterior si no hay enter (salto de linea) entre etiqueta y etiqueta en el HTML, borrando el elemento anterior
//por esto es meor usar parentElement
console.log(card.parentElement);
console.log(card.parentElement.parentElement);
// puedes encadenar parentsElementos cuanto quieras siempre que exista un elemento padre

// ]se pueden seleccionar los elemento hermanos o nodos hermanos con nextElementSibling
console.log(card); //trae el primer elemento
console.log(card.nextElementSibling.nextElementSibling); //trae el segundo elemento hermano
console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);
//trae el tercer elemento hermano

// se puede ir al elemento prebio o hermano anterior
const ultimoCard = document.querySelector(".card:nth-child(4)");

// Trae el ultimo elemento hermano de adelante hacia atras
console.log(ultimoCard.previousElementSibling);

// firstElementChild trae el primer elemento dentro de los hijos del nodo
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.firstElementChild);
// firstElementChild trae el ultimo elemento dentro de los hijos del nodo
console.log(navegacion.lastElementChild);

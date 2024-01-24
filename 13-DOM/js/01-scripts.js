let elemento;
//Document se rrefiere a todo el documento HTML
elemento = document; // selecciona todo el documento, la estructura html del arbol con body y head
let elemento2 = document.all;
console.log(elemento); //selecciona todos los elementos del document
console.log(elemento2);
// el punto all muestra a mas profundidad cada una de las etiquetas utilizadas
let elemento3 = document.head;
// el .head se refiere a lo contenido dentro del head en el html
console.log(elemento3);
let elemento4 = document.body;
// el .head se refiere a lo contenido dentro del body en el html
console.log(elemento4);
let elemento5 = document.domain;
// el .domain se refiere a la direccion ip
console.log(elemento5);
let elemento6 = document.forms;
// el .domain se refiere a una coleccion parecida a un arreglo que si se expande muestra caracteristicas de cada elemento
console.log(elemento6);
// funciona igual con .id. methods o clases
let elemento7 = document.forms[0].method;
// dentro de los corchetes se pone la posicion de acceso[index] dentro de la coleccion

console.log(elemento7);
let todas = document.links; //muestra los links en el documento
let todas1 = document.links[4].className;
// muestra el nombre de la clase  del link 4 retorna como string
let todas2 = document.links[4].classList;
// muestra el nombre de la clase  del link 4 retorna como indice
console.log(todas);
console.log(todas1);
console.log(todas2);

let imagenes = document.images;
console.log(imagenes);
// muestra las imagenes como una coleccion

let scriptes = document.scripts;
console.log(scriptes);
// muestra los scripts como una coleccion

// seleccionar un elemento por su clase
const header = document.getElementsByClassName(`header`);
console.log(header);
// retorna lo que hay en el header como una coleccion

// Se pueden escriben dos  a la vez
//el primero la seleccion, el segundo el console.log()
const contenedores = document.getElementsByClassName(`contenedor`);
console.log(contenedores);
// y se retornan o obtienen como una coleccion html

// si la classname no existe retorna un arreglo vacio
const cualquierCosa = document.getElementsByClassName(`la clase no existe`);
console.log(cualquierCosa);

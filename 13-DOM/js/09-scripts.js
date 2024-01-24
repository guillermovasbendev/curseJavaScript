// elementar un elemento por si mismo(con .remove)
const primerEnlace = document.querySelector(`a`);
// toma el primer enlace
primerEnlace.remove; //lo elimina del DOM

//eliminar un elemento desde el padre(
const navegacion = document.querySelecto(`.navegacion`);
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);
//en la linea anterior se pasa entre [] el numero del nodo hijo el cual se requiere eliminar

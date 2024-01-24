// Se seleccionan las clases de los botones
const btnFlotante = document.querySelector(`.btn-flotante`);
const footer = document.querySelector(`.footer`);

//se puede pasar al addEventListener como primer argumento el tipo de evento, y luego la funcion que se va a ejecutar
btnFlotante.addEventListener(`click`, () => {
  footer.classList.add(`activo`);
});
// Tambien se puede pasar como primer argumento el tipo de evento del addEventListener, y como segundo el nobre de la funcion declarada despues
// btnFlotante.addEventListener(`click`, nombreFuncion);


// function nombreFuncion() {
//   console.log(`Diste click en el boton`);
// }

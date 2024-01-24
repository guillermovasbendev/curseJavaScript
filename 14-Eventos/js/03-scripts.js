const busqueda = document.querySelector(`.busqueda`);

// // revisa que el teclado se doprimia una tecla
// busqueda.addEventListener(`keydown`, () => {
//   console.log(`Escribiendo`);
// });

// // revisa que el teclado se deje de oprimir una tecla
// busqueda.addEventListener(`keyup`, () => {
//   console.log(`Escribiendo mas`);
// });

// // revisa que el cursor entre y salga del objeto
// busqueda.addEventListener(`blur`, () => {
//   console.log(`saliste del input`);
// });

// // revisa que copiaste texto
// busqueda.addEventListener(`copy`, () => {
//   console.log(`copiaste texto`);
// });

// // revisa que pegaste texto
// busqueda.addEventListener(`copy`, () => {
//   console.log(`pegaste texto`);
// });

// // revisa que cortaste texto
// busqueda.addEventListener(`cut`, () => {
//   console.log(`cortaste texto`);
// });

// // revisa que cortaste, copiste, pegaste texto (no cubre el blur )
// busqueda.addEventListener(`input`, () => {
//     console.log(`cortaste, copiaste o pegaste texto`);
//   });

// // revisa que cortaste, copiste, pegaste texto (no cubre el blur )
// busqueda.addEventListener(`input`, (e) => {// funcion se puede nombrar (alias)
//     console.log(`cortaste, copiaste o pegaste texto`);
//   });

//generalmente la funcion se nombra con (e)

// uso de la funcion ahora no anonima usando sus metodos
busqueda.addEventListener(`input`, (e) => {
  // funcion se puede nombrar (alias)
  console.log(e.target.value); //se puede obtener sus datos en consola placeholder tipo etc
});

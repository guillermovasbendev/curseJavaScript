//envia el evento scrool en la consola
window.addEventListener(`scroll`, () => {
  console.log(`Scroll`);
});

// /muestra lacantidad de pixeles de arriba hacia abajo
window.addEventListener(`scroll`, () => {
  const scrollPX = window.scrollY;
  console.log(scrollPX);
});

// metodo getBoundingClientRect muestra la altura su alto espacio a la izquierda a la derecha left bootom right top etc
const premium = document.querySelector(`.premium`);
console.log(premium);

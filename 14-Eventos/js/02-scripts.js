const nav = document.querySelector(`.navegacion`);

// registrar un evento de click
nav.addEventListener(`click`, () => {
  console.log(`click en nav`);
});

// registrar un evento entrar el cursor en el elemento (requiere de click)
nav.addEventListener(`mouseenter`, () => {
  console.log(`entraste el mouse en el elemento`);
});

// registrar un evento sacar el cursor en el elemento (requiere de click)
nav.addEventListener(`mouseout`, () => {
  console.log(`sacaste el mouse en el elemento`);
});

// registrar un evento soltar el click en el elemento (requiere de click)
nav.addEventListener(`mouseup`, () => {
  console.log(`soltaste el click del mouse en el elemento`);
});

// registrar un evento hacer el click en el elemento (requiere de click)
nav.addEventListener(`mousedawn`, () => {
  console.log(`hiciste el click del mouse en el elemento`);
});

// registrar un evento hacer el doble click en el elemento (requiere de click)
nav.addEventListener(`dblclick`, () => {
  console.log(`hiciste doble click del mouse en el elemento`);
});



cardDiv.addEventListener(`click`, (e) => {
  console.log(e.target.classList); //va a mostrar la clase a la que le damos click, asi que cada click va indicar algo diferente
});

const cardDiv = document.querySelector(`.card`);//Se usa como un selector principal

// mediante if se puede seleccionar solo 1
if (e.target.classList.contains(`titulo`)) {
  console.log(`Diste click en titulo`);
}
if (e.target.classList.contains(`precio`)) {
  console.log(`Diste click en precio`);
}
if (e.target.classList.contains(`card`)) {
  console.log(`Diste click en card`);
}

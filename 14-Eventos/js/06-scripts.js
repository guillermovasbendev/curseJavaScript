// Event bubbling
//el evento se propaga es decir si le doy click a un elemento y este esta dentro d otro elemento padre (o cualquiera que tenga registrados eventos) el tambien se va a disparar
const cardDiv = document.querySelector(`.card`);
const infoDiv = document.querySelector(`.info`);
const titulo = document.querySelector(`.titulo`);

cardDiv.addEventListener(`click`, () => {
  console.log(`click en card`);
});

cardDiv.addEventListener(`click`, () => {
  console.log(`click en DIV`);
});

cardDiv.addEventListener(`click`, () => {
  console.log(`click en TITULO`);
});

// para prevenir se usa stop es como el prevent defaul
cardDiv.addEventListener(`click`, (e) => {
  e.stopPropagation;
  console.log(`click en TITULO`);
});

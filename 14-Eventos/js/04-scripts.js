const formulario = document.querySelector(`#formulario`);

formulario.addEventListener(`submit`, (e) => {
  e.preventDefault; //para prevenir la recarga del html
  console.log(e); //muestra el evento
  console.log(e.target); //muestra la ubicacion mediante clases
  console.log(e.target.method); //muestra el metodo de envio POST
  console.log(e.target.action); //muestra la ip a la que se redirecciona
});

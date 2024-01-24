iniciarApp();
function iniciarApp() {
  console.log(`iniciando app ...`);
  segundaFuncion(); //se llama la segunda funcion desde dentro de la primera
}

function segundaFuncion() {
  console.log(`Iniciando desde la segunda funcion`);
  usuarioAutenticado("Guillermo"); // se esta llamando la funcion desde dentro de otra funcion
}

function usuarioAutenticado(usuario) {
  console.log(`autenticando usuario`);
  console.log(`usuario autenticado exitosamente ${usuario}`);
}

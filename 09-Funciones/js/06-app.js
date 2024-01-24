// parametros por default
// se agrega mediante un igual en el parametro
function saludar(nombre, apellido = "falta el apellido") {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Guillermo");

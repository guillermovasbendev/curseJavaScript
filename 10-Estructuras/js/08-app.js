// buenas practicas de usar if
const autenticado = true;
if (autenticado) {
  //se puede eliminar===true se da por echo que se pregunta si es verdad
  console.log(`el usuario esta autenticado`);
}
const puntaje = 500;
if (puntaje > 300) {
  console.log(`felicitaciones, buen puntaje`);
} else if (puntaje > 500) {
  console.log(`tu puntaje fue de 500, excelente`);
}
// error un if no ejecuta 2 condiciones a la vez

// tambien se usa varios if con un return, para que el codigo pare pero debe estar dentro de una funcion, asi:

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log(`felicitaciones, buen puntaje`);
    return;
  }
  if (puntaje > 500) {
    console.log(`Excelente puntaje`);
    return;
  }
}
revisarPuntaje();

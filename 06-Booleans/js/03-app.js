const autorizado = false;
// se omite decir (autorizado===true) es implicito saber que la condicion se cumple

if (autorizado) {
  console.log("estas autorizado");
} else {
  console.log("no estas autorizado");
}

// operador ternario
console.log(autorizado ? `si esta autenticado` : ` no esta autenticado`);

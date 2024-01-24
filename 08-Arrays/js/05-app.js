const meses = [`enero`, `febrero`, `marzo`];
// agregar al final del arreglo con push
meses.push(`abril`);
//importante no se asigna con igual se pasa el parametro
// console.table(meses);

// con unshift se agrega al inicio
meses.unshift(`mes cero`);
console.table(meses);

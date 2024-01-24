const meses = [`enero`, `febrero`, `marzo`, `abril`, `mayo`, `junio`];
// los arreglos pueden ser modificados asi esten declarados con const
meses[0] = "nuevo mes";
// incluso se pueden agregar nuevos datos en index
meses[5] = "nuevo ultimo mes";
console.table(meses);

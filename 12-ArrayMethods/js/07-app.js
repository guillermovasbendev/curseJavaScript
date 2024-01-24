// concat
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = [`Agosto`, `Septiembre`];
const meses3 = [`Octubre`, `Noviembre`];
// con concat
let juntos = meses.concat(meses2);
console.log(juntos);
// se puede concatenarnar mas de uno si se coloca como otro parametro
let todos = meses.concat(meses2, meses3);
console.log(todos);
// spreadoperator
let total = [...meses, ...meses2, ...meses3];
console.log(total);
// si  se agrega un string el lo suma, pero en spread operator, poner los 3 puntos y agregar el string  suma 1 componente por cada letra
let total2 = [...meses, ...meses2, ...meses3, ...`otro`];
console.log(total);
// en la terminal el lo suma cada letra asi:
// `o`:
// `t`:
// `r`:
// `o`:

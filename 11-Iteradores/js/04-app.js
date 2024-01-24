// // el iterador while loop
// // se ejecuta mientras una funcion sea verdadera
// let i = 0; //se debe inicializar

// while (i < 10) {
//   //como argumento la condicion que hara que se ejecute mientras la condicion sea verdadera
//   console.log(i);
//   i++; //incremento
// }
// fizz buss con while
let j = 0;
while (j < 100) {
  if (j === 0) {
    console.log(`${j} es 0`);
  } else if (j % 15 === 0) {
    console.log(`${j} FIZZ BUZZZ`);
  } else if (j % 3 === 0) {
    console.log(`${j} FIZZ`);
  } else if (j % 5 === 0) {
    console.log(`${j}  BUZZ`);
  }

  j++;
}

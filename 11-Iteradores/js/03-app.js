// el reto del fizz buzz con 100 numeros
// multiplo de 3 fizz
// multiplo de 5 Buzz
// multiplos de 3  y 5 fizz buss

for (let i = 0; i < 100; i++) {
  if (i === 0) {
    console.log(`${i} es el numero 0`);
    continue;
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} es FIZZ BUZZ`); //multiplos de 3  y 5 fizz buss
    continue;
  } else if (i % 3 === 0) {
    console.log(`${i} es FIZZ`); // multiplo de 3 fizz
    continue;
  } else if (i % 5 === 0) {
    console.log(`${i} es BUZZ`); // multiplo de 5 Buzz
    continue;
  } else {
    console.log(i);
    continue;
  }
}

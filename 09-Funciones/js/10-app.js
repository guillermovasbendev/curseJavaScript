// arrow functions
// forma mas sencilla de escribir funciones

// funcion normal
const aprendiendo = function () {
  console.log(`aprendiendo javaScript`);
};

// la misma funcion de forma arrow function
const aprendiendo2 = () => {
  console.log(`Aprendiendo JavaScript`);
};

// se elimina el function quedan los paraentesis (), y el = seguido de un >(mayor que) luego entre {} el cuerpo de la funcion

// en una funcion que solo tiene una linea adentro no son necesario los {}
const aprendiendo3 = () => console.log(`no son necesarios los {}`);

// si no se usa {} se deja por implicito el return

const aprendiendo4 = () => `El return es implicito`;

aprendiendo();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4()); //es necesario llamarlo, para que se imprima

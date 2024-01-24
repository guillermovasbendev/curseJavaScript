// Diferencia entre expresion y declaration
// funcion declaracion
sumar(); //llamado
function sumar() {
  console.log(2 + 2);
}
// las funcione declarativa funciona llamandose antes de definirse ( no sufre hoisting)

// expresion de funcion (function expression)
sumar2();
const sumar2 = function () {
  console.log(3 + 3);
};

// las funcione expresiva(con const) no funciona llamandose antes de definirse (hoisting) produce error: no se puede acceder a una variable antes de inicializarla

// la funcion declarativa puede ser accedida antes de declararla, pero la expresiva no(esto sucede por el hoisting)

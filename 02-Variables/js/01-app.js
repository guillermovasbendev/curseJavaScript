// inicializar variable y darle valor
var producto = "monitor de 24  pulgadas";
console.log(producto);
// se pueden reasignar las variables
var producto = "monitor reasignado";
console.log(producto);
// JS es un lenguaje de tipo dinamico, es no tipado
var numero = 23;
console.log(numero);

// inicializar mas de una variable al mismo tiempo
var nombre = "Guillermo";
var apellido = "Vasquez";
var edad = 37;
console.log(nombre);
console.log(apellido);
console.log(edad);
// se puede reemplazar por el siguiente(uso en ingles para no reasignar)
var firstName = "Guillermo",
  lastName = "Vasquez",
  age = 37;

console.log(firstName);
console.log(lastName);
console.log(age);

// las variables no pueden iniciar con numeros
// var 01=01; comentada por que da error
var _01 = 01;
var _usuario = "usuario";
var __usuario = "usuario definido con dos guiones bajos al principio";

// usar camelcase para nombrar variables( la primera letra de la segunda palabra en mayuscula)
var horaFinal = 7;
// tambien se puede usar snake(se usa guion bajop entre palabra y palabra)
var hora_inicial = 6;
// pascal case se usa para classes (la primera en mayusculas)
var Hora = 13;
// nota= no se debe dejar espacio entre palabras da error

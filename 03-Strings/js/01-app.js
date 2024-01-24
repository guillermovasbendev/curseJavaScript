// Existen tres modos de crear cadenas de texto
// la primera forma con comilla doble o sencilla
const string = "string creado con comillas";
console.log(string);

// la segunda forma con la funcion string(pasando como argumento el string)
const string2 = String("string creado con funcion string(parametro string)");
console.log(string2);
// en el caso anterior String con mayuscula es una palabra reservada

// la tercera  forma creando un objeto de tipo string usando new
const string3 = new String(
  "string creado como objeto con new(parametro string"
);
console.log(string2);

// nota= un string se puede definir con comillas dobles o comillas sencillas

// si se necesita usar el simbolo dentro del string se usa el escape de comillas que es una diagonal invertida\ (en el video)
// o con el uso de comillas sencillas afuera (el correcto y el que se debe usar) intercambiar entre comillas sencillas y dobles
const pulgadas = '20"';
const pulgadas2 = '30"';
console.log(pulgadas);

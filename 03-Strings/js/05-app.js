let thing = "nueva variable para pruebas de metodos";

// metodo para reemplazar una palabra por otra
console.log(thing);
console.log(thing.replace("metodos", "replace"));

// metodo para cortar una palabra los dos argumentos son primero inicio y segundo final
let thing2 = "nueva variable para cortar";
console.log(thing2);
console.log(thing2.slice(0, 5)); //el toma esa seleccion y borra lo demas

let thing3 = "nueva variable para cortar con subString";
console.log(thing3);
console.log(thing3.substring(0, 5));
// la unica diferencia es que subString es capaz de ordenar los dos argumentos si por equivocacion los usamos al reves.

// el metodo charAt permite cortar una sola letra
let thing4 = "nueva variable para cortar con charAt";
console.log(thing4);
console.log(thing4.charAt(0));

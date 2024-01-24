// null y undefined

// undefined
let num;
console.log(num);

// null
let num2 = null;
console.log(num2);
console.log(typeof num2);
//es de tipo object por un error al hacer la estructura del codigo (ecma6)

// este error puede generar errores inesperados
// por eso siempre es bueno comparrar de manera estricta con el ===
console.log(num === num2);

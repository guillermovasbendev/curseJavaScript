// destructurings de arrays
const numeros = [10, 20, 30, 40, 50];
// sintaxis de destructruring de un array
const [] = numeros; //se le coloca un alias a cada posicion [indice] (por ejemplo a la posicion 0 [primero]) del arreglo puede ser cualquiera yo lo coloco.
// si quiero seguir dando nombre selecciono
const [primero, segundo, tercero] = numeros;
// se va asignando a cada uno
// si no se requiere el valor de primero y segundo, para dejarlo sin alias simplemente lo dejo vacio
// const [  , , tercero] = numeros;

// si se usa sprete operator ... los tres ultimos pueden quedar en su propio arreglo es decir desde donde se uso el spreat operator hacia adelante quedan en su propio arreglo con el alias
// const [primero, segundo, ...tercero] = numeros;
console.log(primero); //se llama con el alias
console.log(tercero);

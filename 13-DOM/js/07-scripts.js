// cambiar el css con javaScript

//acceder a los estilos css desde JavaScript
const encabezado = document.querySelector("h1");
console.log(encabezado.style);

// muestra una lista con los estilos

// en JavaScript en vez de usar la sintaxis css como justify-content se cambia a camellcase y queda JustifyContent

encabezado.style.backgroundColor = "blue";
// Transforma el fondo en color azul
encabezado.style.fontFamily = "Arial";
// cambia el estilo de fuente
encabezado.style.textTransform = "uppercase";
// la pone en mayusculas

// es mas recomendable agregar o quitar clases, para que no se extienda el codigo de javaScript
const card = document.querySelector(".card");
card.classList.add("nueva-clase"); // en el html se agrega la nueva clase
card.classList.remove("nueva-clase"); // en el html se elimina la clase la nueva clase
console.log(card.classList);
// usamos classList para que nos entregue la clase, en el objeto[0] aparece la clase en la consola

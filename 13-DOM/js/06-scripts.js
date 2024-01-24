// modificar textos e imagenes con javaScript
const miParrafo = document.querySelector(".contenido-hero h1");
console.log(miParrafo);

console.log(miParrafo.innerText); //si en el css visibility:hidden no lo encontrara
console.log(miParrafo.textContent); ////si en el css visibility:hidden si lo va a encontrar

// las dos anteriores retornan el contenido de texto dentro de la seleccion linea 2
console.log(miParrafo.innerHTML);
// retorna el texto y ademas el HTML

// se puede usar encadenamiento
const miParrafo2 = document.querySelector(".contenido-hero h1").textContent;
console.log(miParrafo);
// retorna lo mismo de las primeras linea el contenido en texto h1

document.querySelector(".contenido-hero h1").textContent = "nuevo mensaje";
// modifica a el nuevo texto

const nuevoTexto = "Aqui va el string de Nuevo Texto";
document.querySelector(".contenido-hero h1").textContent = nuevoTexto;
// o como en el anterior se puede establecer una constante y llamarla para asignar

//otras tres formas de seleccionar texto
encabezado.innerText; //si el css tiene hidden NO lo encuentra
encabezado.textContent; //si el css tiene hidden SI lo encuentra
encabezado.innerHTML; //se trae el tml tambien

document.querySelector(
  `.contenido-hero h1`
).textContent = `este es el nuevo string`; //el string aora reemplazara el que aparecia antes para la clase dentro del argumento

// MODIFICAR IMAGEN
const imagen = document.querySelector(`.card img`);
imagen.src = `img/hacer2.jpg`;
// se ha modificado la imagen igual a la segunda|

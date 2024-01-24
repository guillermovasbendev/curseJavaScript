const enlaceDiv = document.createElement("div"); //crea div
const enlaceParrafo = document.createElement("p"); //crea parrafo
const enlaceTitulo = document.createElement("h1"); //crea titulo h1

// se crea el enlace
const enlace = document.createElement("a"); //crea enlace
enlace.textContent = "nuevo enlace"; //agrega el texto
enlace.href = `/nuevo enlace`; //es la direccion de la nueva pagina web (asi se crean cada uno de los atributos como un metodo)
console.log(enlace);

const navegacion = document.querySelector(`.navegacion`); //selecciona la clase del elemento padre al cual le vamos a agregar el elemento creado
navegacion.appendChild(enlace); //indica como mediante el metodo appendChild tomamos el elemento seleccionado navegacion, y le agregamos como hijo el elemento creado(enlace)

navegacion.insertBefore(enlace, navegacion.children[1]);
// insertBefore recibe dos argumentos el primero es que elemento se quiere insertar, y el segundo en que posicion como en español seria (insertar antes de) estaria indicando antes de la posicion uno(como es practicamente un array) quedaria entre la posicion [0] y la [1] actuales

navegacion.innerHTML(enlace, navegacion.children[1]);

// resumen de los pasos para crear un elemento HTML desde JavaScript

// primero. crear elemento guardandolo dentro de una constante con (createElement)
// Modificar sus atributos con el nombre que se le dio como constante en el punto anterior
//Seleccionar o crear el elemento padre mediante una constante
// y sumar el elemento HTML como metodo del elemento creado segun sea
// (.classList,.appendChild o segun se requiera) +.add(y la imagen o elemento necesario como argumento)
// finalmente insertar en el contenedor o elemento padre creando una nueva constante y trayendola con querySelector y su clase, para luego mediante metodo el que se requiera (appendChild o insertbefore) se agrega el elemento creado anteriormente

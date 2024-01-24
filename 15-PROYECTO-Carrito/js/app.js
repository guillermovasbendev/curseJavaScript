//creacion de variables para sleccionar items en el html mediante ID´s
const listaCursos = document.querySelector(`#lista-cursos`);
const contenedorCarrito = document.querySelector(`#lista-carrito tbody`);
const carrito = document.querySelector(`#carrito`);
const VaciarCarrito = document.querySelector(`#vaciar-carrito`);
// En el index.tml hay un table body vacio Linea 35, alli se agrgaran los cursos de manera dinamica
let articulosCarrito = []; // inicio de variable, que guardara los cursos mas adelante

cargarEventListeners(); //Se llama la funcion que se declarara mas adelante
// Se crea una funcion donde se registran todos los addEventListeners
function cargarEventListeners() {
  // Se ejecuta la funcion, cuando en la card presionas "agregar cursos" o cualquier espacio dentro de cualquiera de las cards que tiene el id lista-cursos
  listaCursos.addEventListener(`click`, agregarCurso); //Este addEventListener dispara la funcion agregarCurso que se encuentra mas abajo
}

// funciones
function agregarCurso(e) {
  e.preventDefault(); //para prevenir el salto al inicio
  //uso de funcion e para prevenir bubbling
  if (e.target.classList.contains(`agregar-carrito`)) {
    //Para mostrar las clases dentro de la etiqueta html presionada y revisar si se contiene la clase agregar-carrito (se paso como parametro)
    const cursoSeleccionado = e.target.parentElement.parentElement; //para acceder al elemento padre, del padre
    leerDatosCurso(cursoSeleccionado); //dispara la funcion leerDatosCurso, pasandole como parametro la constante cursoSeleccionado definida anteriormente con el contenido
  }
}

// leer los datos del curso seleccionado
// lee del contenido html y extrae la informacion del curso

function leerDatosCurso(curso) {
  //se le puede poner cualquier alias al parametro
  //   console.log(curso); //en consola trae la card con sus clases
  //    crear objeto con contenido del curso seleccionado
  const infoCurso = {
    imagen: curso.querySelector("img").src, //mediante querysel trae el source de la imagen
    titulo: curso.querySelector("h4").textContent, //mediante querysel trae el texto del h4
    precio: curso.querySelector(".precio span").textContent, //mediante querysel trae el texto del h4(el precio)
    id: curso.querySelector("a").getAtribute("data-id"), //mediante querysel trae el texto del h4(el precio)|
    cantidad: 1,
  };
  // agregar elementos al arreglo (let de carrito)
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);
}

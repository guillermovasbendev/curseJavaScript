// funciones con metodo de propiedad
// es decir que a cada propiedad se le pasa una funcion que hace algo
const reproductor = {
  reproducir: function (id) {
    console.log(`reproduciendo cancion con el id ${30}`);
  },
  pausar: function () {
    console.log(`pausando..`);
  },
};
// Si una funcion esta como un objeto o dentro de un objeto se conforma como una propiedad, y asi pueden ser llamadas, como una propiedad despues del punto
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
// tambien se pueden agregar (crear) metodos nuevos desde funcion por ejemplo
reproductor.borrar = function (id) {
  console.log(`borrando cancion ${id}`);
};

reproductor.borrar(30);

console.log(reproductor); // se pueden apreciar los metodos en la consola

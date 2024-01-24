// arrow function en el reproductor de musica
// cambiando todas las propiedades a arrow function para usarlas como  metodos.
const reproductor = {
  reproducir: (id) => console.log(`reprooduciendo musica con el id ${id}`), //modificada con las reglas de arrow function
  pausar: () => console.log(`pausando ...`),
  reproducir: (id) => console.log(`reprooduciendo musica con el id ${id}`),
  borrar: (id) => console.log(`borrando cancion con el id ${id}`),
  crearPlayList: (nombre) =>
    console.log(`creando play list con el nombre ${nombre}`),
  reproducirPlayList: (nombre) =>
    console.log(`reprooduciendo playList con el nombre ${nombre}`),
  // set agrega valores(usa this)
  // get obtiene valores (usa this)
  set nuevaCancion(cancion) {
    this.cancion = cancion; //se usa this para referirse a que es dentro del objeto
    console.log(`añadiendo cancion ${cancion}`);
  },
  get obteniendoCancion() {
    console.log(`${this.cancion}`);
  },
};
// para usarlos (set,get) no se usan parentesis, sino que se llaman como propiedad de un objeto desde fuera del objeto asi:

reproductor.nuevaCancion = `enterSandman`;
reproductor.obteniendoCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList(`heavy metal`);
reproductor.crearPlayList(`rock 90s`);
reproductor.crearPlayList(`Heavy metal 2`);
// obtenemos el mismo resultado pero con arro functions

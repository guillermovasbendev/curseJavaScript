// deconstruccion de un objeto o caracteristica de un objeto para un objeto interno
const object = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
  informacion: {
    peso: `1kg`,
    medida: `1m`,
    fabricacion: `china`,
  },
};

//deconstruccion de un objeto dentro de otro objeto
// const{nombre,informacion: {medida}} =object;

//acceder tambien a la key informacion y a la key medida
// const{nombre, informacion, informacion: {medida}} =object;

const {
  informacion: { fabricacion },
} = object;
//para cada variable se debe crear con separacion de coma(,) para cada objeto
// se debe usar los dos puntos para llamar la deconstruccion de la caracteristica de un objeto dentro de un objeto
console.log(fabricacion);

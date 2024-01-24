const objeto = {
  nombre: "televisor",
  pulgadas: 26,
  precio: 3222,
  // la funcion pretende concatenar valores que se encuentran dentro del objeto a la frase pero estos no se dejan acceder directamente si se ejecuta la funcion
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre}, tiene un precio de ${this.precio}`
    );
  },
};

//this se refiere a los valores que existen dentro del mismo objeto

// escrito sin this producira error
objeto.mostrarInfo();

//El objeto this ace referencia a variables dentro del mismo objeto, asi que si no se usa busca error

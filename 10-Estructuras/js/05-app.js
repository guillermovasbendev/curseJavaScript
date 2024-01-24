// estructura de datos switch case
const metodoDePago = `tarjeta`;
// cada case es una condicion de evalucion que ejecuta codigo
switch (metodoDePago) {
  case `efectivo`:
    console.log(`pagaste con efectivo`);
    break; //detiene la ejecucion de el switch
  case `cheque`:
    console.log(`pagaste con cheque`);
    break;
  case `tarjeta`:
    console.log(`pagaste con tarjeta`);
    break;
  default: //es como un else que ejecuta si ninguna de las condiciones anteriores sucedio
    console.log(`Metodo de pago no soportado`);
}
// tambien dentro de cada case se puede llamar una funcion

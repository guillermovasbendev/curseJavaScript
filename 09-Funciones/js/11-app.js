// parametros y argumentos dentro de un arrow function
const aprendiendo = function (tecnologia) {
  console.log(`aprendiendo ${tecnologia}`);
};

aprendiendo(`JavaScript`);
// para las arrow function los argumentos se pasan dentro de los () parentesis.

const aprendiendo2 = (tecnologia) => `aprendiendo ${tecnologia}`;
// si en estos parentesis se pasa solo un parametro no es necesario usar los parentesis

const aprendiendo3 = (tecnologia, tecnologia2) =>
  `aprendiendo ${tecnologia} y ${tecnologia2}`;
//si se usan dos parametros, entonces se ace necesario el uso del parentesis()
console.log(aprendiendo2(`JavaScript`));
console.log(aprendiendo3(`JavaScript`, `java`));

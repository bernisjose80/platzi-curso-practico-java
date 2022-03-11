//const lista1=[100,200,300,400,500];

function CalcularMediaAritmetica(lista){
//let indexi=0;
//let sumalista=0;

//for(let i=0; i <lista.length; i++){
  //  sumalista=sumalista+lista[i];
//}
const sumalista=lista.reduce (function (valoracumulado=0, nuevoelemento){
  return valoracumulado+nuevoelemento;
});
const promedio=sumalista/lista.length;
return promedio;
//console.log("La media arimetica de los sueldos es: " + sumalista/lista.length);


}






var tamano=0;

function OrdenArray(lista1){
 console.log(lista1);
  lista1.sort(function(a, b) {
    return a - b;
  });
  console.log(lista1);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  console.log(sumaLista);
  console.log(lista.length)
  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}


function EsPar(lista1){
    let resto=0;
    let numero=0;
    
    
    
    tamano=lista1.length;  
    resto=tamano%2;
    numero=lista1.length/2;

    const elemento1 = lista1[numero];
    const elemento2 = lista1[numero-1];
    
    
    if (resto===0) {    

    //console.log(elemento1) ;
    //console.log(elemento2);
    const listax=[elemento1,elemento2];
    const promedio=calcularMediaAritmetica(listax);

    
    return [console.log("La mediana del arreglo es:" + promedio)];
    
   } else { 

    numero=Math.trunc(numero);   
    return [console.log("La mediana del arreglo es:" + lista1[numero] )];    
    
    
   }
    
    
    }

    function Llenar(){
      var capture;  
      
      capture= document.getElementById("numer").value; 
      //var lista1=[capture];

      

      var b = capture.split(',').map(function(item) {
        return parseInt(item, 10);
        });
          

      
      OrdenArray(b);  
      EsPar(b);    
    }

    

    

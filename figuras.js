// Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado=5;
//console.log("Los lados del cuadrado miden:"+ ladoCuadrado +" Cm");

function perimetroCuadrado(lado){
return lado*4;
}
//console.log("El perimetro cuadrado mide:"+ perimetroCuadrado + " Cm");

 function areaCuadrado(lado){
    return lado*lado;
 }
//console.log("El Area del cuadrado mide:"+ areaCuadrado + " Cm*2");
console.groupEnd;


// Codigo del Triangulo
console.group("Triangulo")
//const triangulo1=6;
//const triangulo2=6;
//const triangulo3=4;

//console.log("Los lados del triangulo miden:"+ 
//triangulo1+ " Cm " + 
//triangulo2+ " Cm "+ triangulo3 +
//" Cm ");

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base){
const suma = parseInt(lado1)+ parseInt(lado2)+ parseInt(base)
return suma
//console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm");
}

function areaTriangulo(base,altura){
 return (base*altura)/2;
//console.log("El area del triángulo es de: " + areaTriangulo + "cm*2");
}

console.groupEnd

// Codigo del circulo
console.group("Circulo")
// codigo radio
//const radio=4;
//console.log("El radio del Circulo es: "+ radio +"cm");

// Diametro del circulo
function diametroCirculo(radio){
   return radio*2;
} 
//console.log ("El diametro del Circulo es: "+ diametroCirculo + "cm");

//PI
const PI=Math.PI;
console.log ("PI mide: "+ PI);

//Perimetro
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio)
    return PI*diametro;
//console.log ("El Perimetro del Circulo es: "+ perimetroCirculo + "cm");
}


//Area
function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log ("El area del Circulo es: "+ areaCirculo + "Cm2");
console.groupEnd

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;     
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }

  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }

  function calcularareaTriangulo() {
    const input1 = document.getElementById("InputLado");
    const input2= document.getElementById("InputBase");
    const value1 = input1.value;
    const value2 = input2.value;
  
    const area = areaTriangulo(value1,value2);
    alert(area);
  }

  function calcularperimetroTriangulo() {
    const input1 = document.getElementById("InputLado");
    const input2= document.getElementById("InputBase");
    const value1 = input1.value;
    const value2 = input2.value;
  
    const perim = perimetroTriangulo(value1,value1,value2);
    alert(perim);
  }

  function calcularperimetroCirculo() {
    const input1 = document.getElementById("InputCirculo");
    
    const value1 = input1.value;
  
    const perime = perimetroCirculo(value1);
    alert(perime);
  }
  function calcularareaCirculo() {
    const inputRa = document.getElementById("InputCirculo");
    
    const radius = inputRa.value;
  
    const areaC = areaCirculo(radius);
    alert(areaC);
  }



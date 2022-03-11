//let discount=["15", "25", "30", "45"];
//const porcentajePrecioConDescuento = 100 - descuento;
 // const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = Number(inputCoupon.value);
    console.log(priceValue)
    console.log(couponValue)

    let descuent;

    switch(couponValue) {
      case 1: // "Opcion15"
       descuent = 15;
       break;
      case 2: // "Opcion25"
        descuent = 25;
     break;
     case 3: // "Opcion30"
        descuent = 30;
      break;    
     case 4: // "Opcion45"
        descuent = 45;
      break;    
     }
     console.log(descuent)
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuent);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }


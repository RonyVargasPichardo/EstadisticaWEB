

/**Calcular Precio con descuento de un articulo*/

//accedo a los input del html y el elemento de resultado
const result = document.getElementById('resultPrecio');
const precio = document.getElementById('precio');
const descuento = document.getElementById('descuento');

// crear un array de objetos de cupones.
// const coupons = [
//     {   name: 'diamante', discount: 50, },
//     {   name: 'oro'     , discount: 25, },
//     {   name: 'plata'   , discount: 15, },
// ];



//creo funciones para validar mis datos y se cumpla el descuento de los cupones
function calcularPrecioConDescuento(){
    const precioValue = parseFloat(precio.value);
    const descuentoValue = descuento.value;
    //arrow function para validar que los cupones sean correctos
    // const isdescuentoValueValid = coupon => coupon.name === couponValue;
    // const usercoupon = coupons.find(isdescuentoValueValid);

    //valido mis datos
    if(!precioValue || !descuentoValue){
        result.innerText = `Ingresa los datos`;
    }
    // else if(!userdescuento){
    //     result.innerText = `El cupon '${descuentoValue}' no es valido`;
    // } 
    else{
        PrecioConDescuento(precioValue, descuentoValue); //llamo a la funcion par calcular
        precio.value = '';
        descuento.value = '';
    }
}

const PrecioConDescuento = (precio, descuento) =>{
    //formula    precio * (100% - descuento%) / 100
    const porcentajeDelDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajeDelDescuento ) / 100;

    return result.innerText = `El articulo cuesta $${precio}
Tiene un ${descuento}% de descuento 
Con el descuento pagarias solamente $${PrecioConDescuento}.`;

}





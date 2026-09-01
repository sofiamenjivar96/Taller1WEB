
// EJERCICIO 1

function CalcularDescuento (nombreProducto, precioProducto, porcentajeDescuento){

    if(precioProducto>=0 && porcentajeDescuento>=0){ //validar que los datos sean positivos
        let descuento = precioProducto * (porcentajeDescuento/100);
        let precioFinal = precioProducto - descuento;
        return nombreProducto + " ,Precio final: " + precioFinal;
    } else {
        return "Datos invalidos, Ingrese valores positivos";
    }
}

//probar codigo
console.log(CalcularDescuento("Bocina",100,30));
console.log(calcularDescuento("Camisa", 50, 20));
console.log(calcularDescuento("Cartera", -10, -30));
// EJERCICIO 3

function ConvertirTemperatura(gradosCelcius){

    if(gradosCelcius>= -273.15){ //Verificar que la temperatura sea valida
        let temFahrenheit = (gradosCelcius * 9 / 5) + 32; //convertir
        return  "\n Temperatura en Celsius: " + gradosCelcius +
        "\n Temperatura en Fahrenheit: " + temFahrenheit
    } else {
        return "\nError, Ingrese una temperatura valida.";
    }
}

//Probar codigo
console.log(ConvertirTemperatura(50));
console.log(ConvertirTemperatura(-106));
console.log(ConvertirTemperatura(-300));
function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return num1 + num2;

    case "resta":
      return num1 - num2;

    case "multiplicacion":
      return num1 * num2;

    case "division":
      if (num2 === 0) {
        return "Error: no se puede dividir entre 0";
      }
      return num1 / num2;

    default:
      return "Operación no válida";
  }
}

// Bloque para probar
console.log("--- Ejercicio 4 ---");
console.log("10 + 5 =", calculadora(10, 5, "suma"));
console.log("10 - 5 =", calculadora(10, 5, "resta"));
console.log("10 * 5 =", calculadora(10, 5, "multiplicacion"));
console.log("10 / 5 =", calculadora(10, 5, "division"));
console.log("10 / 0 =", calculadora(10, 0, "division"));

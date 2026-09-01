function clasificarNota(nota) {
  if (nota >= 90 && nota <= 100) {
    return "Excelente";
  } else if (nota >= 80) {
    return "Muy Bueno";
  } else if (nota >= 70) {
    return "Bueno";
  } else if (nota >= 60) {
    return "Regular";
  } else {
    return "Reprobado";
  }
}

// Pruebas
console.log("\n--- Ejercicio 2 ---");
console.log("97 ->", clasificarNota(97));
console.log("83 ->", clasificarNota(83));
console.log("70 ->", clasificarNota(70));
console.log("69 ->", clasificarNota(69));
console.log("03 ->", clasificarNota(3));
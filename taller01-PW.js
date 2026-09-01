//----------------------------------------------------------------------------------------------
//ejericico 2
//----------------------------------------------------------------------------------------------

function clasificarNota(nota) {
  if (nota >= 90 && nota <= 100) {
    return "Excelente";
  } else if (nota >= 80 && nota <= 89) {
    return "Muy Bueno";
  } else if (nota >= 70 && nota <= 79) {
    return "Bueno";
  } else if (nota >= 60 && nota <= 69) {
    return "Regular";
  } else if (nota < 60 && nota >= 0) {
    return "Reprobado";
  } else {
    return "Nota inválida";
  }
}
//probando codigo
console.log(clasificarNota(95)); // Excelente
console.log(clasificarNota(82)); // Muy Bueno
console.log(clasificarNota(75)); // Bueno
console.log(clasificarNota(65)); // Regular
console.log(clasificarNota(50)); // Reprobado
console.log(clasificarNota(120)); // Nota inválida

//----------------------------------------------------------------------------------------------
//ejercicio 5
//----------------------------------------------------------------------------------------------

function generarUsuario(nombreCompleto) {
return nombreCompleto.toLowerCase().replace(/\s+/g, '')+ '_dev';}
console.log(generarUsuario("Krissia Menjivar"));

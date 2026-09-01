function generarUsuario(nombreCompleto) {
  let usuario = nombreCompleto.toLowerCase(); // lo hace miniscula todo
  usuario = usuario.split(" ").join("");      // elimina los espacios
  usuario = usuario + "_dev";                 // agrega el sufijo "_dev"  
 
  return usuario;
}

 
// Pruebas
console.log("\n--- Ejercicio 5 ---");
console.log(generarUsuario("Sofia Mejivar"));
console.log(generarUsuario("Krissia Menjivar"));
console.log(generarUsuario("Nicole Estrada"));
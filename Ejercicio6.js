class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarInfo() {
    console.log(`Producto: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log(`Stock: ${this.stock} unidades`);
  }
}

// Creación de objetos
const producto1 = new Producto("Cafe", 25, 10);
const producto2 = new Producto("Computadora", 45, 15);

console.log("\n--- Ejercicio 6 ---");
producto1.mostrarInfo();
console.log(""); //espacio
producto2.mostrarInfo();
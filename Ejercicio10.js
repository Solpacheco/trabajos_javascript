//Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio
//final de un producto después de aplicar un descuento. Pide al usuario que ingrese
//el precio original y el porcentaje de descuento, y muestra el precio final.
//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse así:
//let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

const prompt = require("prompt-sync")();

// 1. Pedimos el precio original
let precioOriginal = parseFloat(prompt("Ingresá el precio original del producto: "));   
// 2. Pedimos el porcentaje de descuento
let porcentajeDescuento = parseFloat(prompt("Ingresá el porcentaje de descuento: "));
// 3. Calculamos el monto del descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// 4. Calculamos el precio final
let precioFinal = precioOriginal - montoDescuento;
// 5. Mostramos el resultado
console.log("El precio final después de aplicar el descuento es:", precioFinal);    


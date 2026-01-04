//Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta
//una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de
//conversión es:
//Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en
//Fahrenheit.
//Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse asi:
//let fahrenheit = celsius * 9 / 5 + 32;


const prompt = require("prompt-sync")();

// 1. Pedimos la temperatura en Celsius
let celsius = parseFloat(prompt("Ingresá la temperatura en grados Celsius:"));

// 2. Aplicamos la fórmula
let fahrenheit = celsius * 9 / 5 + 32;

// 3. Mostramos el resultado
console.log("La temperatura en Fahrenheit es:", fahrenheit);

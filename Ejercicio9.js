//Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa
//Corporal (IMC). El IMC se calcula con la fórmula:
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
//Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse así:
//let imc = peso / (altura * altura);

const prompt = require("prompt-sync")();

// 1. Pedimos el peso en kilogramos
let peso = parseFloat(prompt("Ingresá tu peso en kilogramos: "));           
// 2. Pedimos la altura en metros
let altura = parseFloat(prompt("Ingresá tu altura en metros: "));   
// 3. Calculamos el IMC
let imc = peso / (altura * altura);
// 4. Mostramos el resultado
console.log("Tu Índice de Masa Corporal (IMC) es:", imc);

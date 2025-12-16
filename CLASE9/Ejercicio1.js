//Declara dos variables numéricas numero1 y numero2. 
//Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales

const prompt = require("prompt-sync")();


let numero1= parseFloat(prompt("Ingrese el primer número:"));
let numero2= parseFloat(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
    console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ") ");
}else if (numero2 > numero1) {
    console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ") ");
} else {        
    console.log("Ambos números son iguales.");
}
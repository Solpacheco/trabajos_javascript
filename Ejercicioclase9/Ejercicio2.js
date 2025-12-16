//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores
//numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está
//dentro del rango definido por las constantes

const prompt = require("prompt-sync")();
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 30;

let numeroUsuario = parseFloat(prompt("Ingrese un número para verificar el rango:"));  

if (numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO){ 
console.log("Súpeeeer! El número está dentro del rango.");
} else {
console.log("La próxima sera campeona! El número está fuera del rango.");
}
 
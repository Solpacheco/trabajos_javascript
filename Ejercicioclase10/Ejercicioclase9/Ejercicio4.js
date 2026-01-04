//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre

const prompt = require("prompt-sync")();    
const MI_NOMBRE = "Sol";

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");    

if (nombreUsuario === MI_NOMBRE){
console.log( "Coincide! Tu nombre es igual al mio.");
} else {
console.log("No coincide!Tu nombre es diferente al mio.");
}

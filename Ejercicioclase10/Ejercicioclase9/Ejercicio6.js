 //Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
//Muestra un mensaje personalizado según el caso.

const prompt = require("prompt-sync")();

let edadUsuario = parseInt(prompt("Por favor, ingresa tu edad:"));    

if (edadUsuario >= 18){
    console.log("ya sos mayor de edad, bienvenido al mundo adulto!");
    } else if (edadUsuario < 18){
    console.log("sos menor de edad no quieras crecer tan rápido!");
}
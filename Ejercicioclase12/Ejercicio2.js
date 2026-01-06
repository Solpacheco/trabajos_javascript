//Ejercicio 2: Do While
//Escribe un programa que solicite al usuario ingresar una contraseña. Si la
//contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
//correcta. La contraseña correcta es "1234".


const prompt = require('prompt-sync')(); // Importamos prompt-sync

const contraseñaCorrecta = "1234";
let contraseñaIngresada;

do {
    contraseñaIngresada = prompt("Ingresa la contraseña: ");
    if (contraseñaIngresada !== contraseñaCorrecta) {
        console.log("Contraseña incorrecta, intenta de nuevo.");
    }
} while (contraseñaIngresada !== contraseñaCorrecta);

console.log("¡Contraseña correcta! Podes Ingresar.");
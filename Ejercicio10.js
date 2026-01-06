//Ejercicio 10: Adivina el número
//Consigna:
//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego,
//pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera
//de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no
//acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver
//este ejercicio.

const prompt = require("prompt-sync")();

// Número secreto entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let acerto = false;

for (let i = 1; i <= 3; i++) {
    let intento = parseInt(prompt("Intento " + i + ": adivina el número (1 al 10): "));

    if (intento === numeroSecreto) {
        console.log("¡Felicitaciones! Adivinaste el número.");
        acerto = true;
        break;
    } else {
        console.log("No es correcto.");
    }
}

if (!acerto) {
    console.log("No acertaste. El número secreto era: " + numeroSecreto);
}

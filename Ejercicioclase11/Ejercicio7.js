//Ejercicio 7: Calculadora simple
//Consigna:
//Crea un programa que le pida al usuario dos números y una operación matemática a
//realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa
//deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el
//programa debe mostrar un mensaje de error. Usa switch para resolverlo.

const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division): ");

let resultado;

switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        break;
    case "resta":
        resultado = numero1 - numero2;
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        break;
    case "division":
        resultado = numero1 / numero2;
        break;
    default:
        console.log("Operación inválida. Usa suma, resta, multiplicacion o division.");
        break;
}

if (resultado !== undefined) {
    console.log("El resultado es: " + resultado);
}

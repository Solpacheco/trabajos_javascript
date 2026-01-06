//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno.
// (Investiga sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")({ sigint: true });

let lado1 = parseFloat(prompt("Ingrese el primer lado: "));
let lado2 = parseFloat(prompt("Ingrese el segundo lado: "));
let lado3 = parseFloat(prompt("Ingrese el tercer lado: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}

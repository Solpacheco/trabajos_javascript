//1-Declarar dos variables: Nuestra tarea será declarar dos variables: una
//con el nombre edad y la otra con el nombre peso. Después deberás asignarle un
//valor.    

const prompt = require("prompt-sync")();

let edad = 30;
let peso = 60;


let nombre = prompt("Ingresá tu nombre: ");
edad = prompt("Ingresá tu edad: ");
peso = prompt("Ingresá tu peso: ");


console.log(
  "Hola " + nombre + ", tenés " + edad + " años y pesás " + peso + " kg."
);

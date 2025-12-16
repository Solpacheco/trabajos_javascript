//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
// Si el número no está dentro de ese rango,muestra un mensaje de error.

const prompt = require("prompt-sync")();    
let numeroDia = parseInt(prompt("Por favor, ingresa un número del 1 al 7 para conocer el día de la semana correspondiente:"));

    if (numeroDia === 1){
    console.log("El día correspondiente al número ingresado es Lunes.");
    }                               
    else if (numeroDia === 2){
    console.log("El día correspondiente al número ingresado es Martes.");
    }
    else if (numeroDia === 3){
    console.log("El día correspondiente al número ingresado es Miércoles.");    cel
    }
    else if (numeroDia === 4){
    console.log("El día correspondiente al número ingresado es Jueves.");
    } 
    else if (numeroDia === 5){
    console.log("El día correspondiente al número ingresado es Viernes.");
    }
    else if (numeroDia === 6){
    console.log("El día correspondiente al número ingresado es Sábado.");
    }
    else if (numeroDia === 7){
    console.log("El día correspondiente al número ingresado es Domingo.");
    }
    else {
    console.log("Error :El número ingresado no corresponde a ningún dia de la semana.");
    }
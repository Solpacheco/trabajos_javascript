//Ejercicio 9: Última aparición de un modelo de auto
//Se está realizando el desarrollo de una aplicación para control de gastos. Cada
//día, el usuario ingresa sus gastos cotidianos.
//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen cuatro
//semanas.
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y
//cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0,
//día 1, columna 1, día 2, etcétera.
//a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos
//que cada fila representa una semana, es decir, si nos indican semana 2
//tenemos que sumar la fila 1 de la matriz. Recordar que las matrices
//comienzan siempre en posición 0.
//b) La aplicación también tendrá una parte de estadísticas, para esto nos
//solicitan dar el total de un día en particular, por ejemplo del día 3, acá
//también tengamos en cuenta lo que ocurre con las filas, ya que las columnas
//también comienzan en 0.
//
//c) Por último, es necesario tener el total de gastos realizados en el mes.
//✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
//resolver este último punto?
//d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día
//que más gastos se realizaron.
//✔ Posibles matrices para comprobar los resultados

// Matriz de ejemplo 4x7: 4 semanas, 7 días cada semana
let gastos = [
    [100, 200, 150, 300, 50, 400, 250],  // semana 1
    [200, 100, 300, 250, 150, 100, 50],  // semana 2
    [50, 150, 200, 100, 300, 250, 200],  // semana 3
    [300, 200, 100, 400, 150, 50, 100]   // semana 4
];

// Función: total de una semana
function totalSemana(matriz, numeroSemana) {
    let semanaIndex = numeroSemana - 1; 
    let suma = 0;
    for (let i = 0; i < matriz[semanaIndex].length; i++) {
        suma += matriz[semanaIndex][i];
    }
    return suma;
}

// Función: total de un día
function totalDia(matriz, numeroDia) {
    let diaIndex = numeroDia - 1;
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][diaIndex];
    }
    return suma;
}

// Función: total del mes
function totalMes(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
    }
    return suma;
}

// Función: semana y día con más gastos
function semanaDiaMax(matriz) {
    let maxSemana = 0;
    let semanaIndex = 0;

    for (let i = 0; i < matriz.length; i++) {
        let sumaSemana = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            sumaSemana += matriz[i][j];
        }
        if (sumaSemana > maxSemana) {
            maxSemana = sumaSemana;
            semanaIndex = i;
        }
    }

    let maxDia = 0;
    let diaIndex = 0;

    for (let j = 0; j < matriz[0].length; j++) {
        let sumaDia = 0;
        for (let i = 0; i < matriz.length; i++) {
            sumaDia += matriz[i][j];
        }
        if (sumaDia > maxDia) {
            maxDia = sumaDia;
            diaIndex = j;
        }
    }

    return {
        semanaConMasGastos: semanaIndex + 1,
        totalSemana: maxSemana,
        diaConMasGastos: diaIndex + 1,
        totalDia: maxDia
    };
}

// ---- Ejemplo de uso ----
console.log("Total semana 2:", totalSemana(gastos, 2));
console.log("Total día 3:", totalDia(gastos, 3));
console.log("Total del mes:", totalMes(gastos));

let stats = semanaDiaMax(gastos);
console.log("Semana con más gastos:", stats.semanaConMasGastos, "Total:", stats.totalSemana);
console.log("Día con más gastos:", stats.diaConMasGastos, "Total:", stats.totalDia);

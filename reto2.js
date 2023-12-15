// Función para calcular el promedio ponderado
function calcularPromedioPonderado(nota1, nota2, nota3) {
    // Pesos de las notas
    const pesoNota1 = 0.4;
    const pesoNota2 = 0.3;
    const pesoNota3 = 0.3;

    // Cálculo del promedio ponderado
    const promedioPonderado = (nota1 * pesoNota1) + (nota2 * pesoNota2) + (nota3 * pesoNota3);
    return promedioPonderado;
}

// Función para determinar la situación del estudiante
function determinarSituacion(promedio) {
    if (promedio < 3.95) {
        return "Reprobado";
    } else if (promedio >= 3.95 && promedio <= 4.94) {
        return "Examen";
    } else {
        return "Aprobado (exento)";
    }
}

// Solicitar las notas al usuario
const nota1 = parseFloat(prompt("Ingrese la Nota 1:"));
const nota2 = parseFloat(prompt("Ingrese la Nota 2:"));
const nota3 = parseFloat(prompt("Ingrese la Nota 3:"));

// Verificar que las notas sean válidas
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("Ingrese notas válidas.");
} else {
    // Calcular el promedio ponderado
    const promedio = calcularPromedioPonderado(nota1, nota2, nota3);

    // Determinar la situación del estudiante y mostrar el resultado por consola
    const situacion = determinarSituacion(promedio);
    console.log(`Promedio Ponderado: ${promedio.toFixed(2)}`);
    console.log(`Situación del estudiante: ${situacion}`);
}

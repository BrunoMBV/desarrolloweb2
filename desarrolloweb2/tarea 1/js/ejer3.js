// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Función para generar N números primos menores que 110
function generarNumerosPrimos(N) {
    let numerosPrimos = [];
    let numeroGenerado;

    while (numerosPrimos.length < N) {
        numeroGenerado = Math.floor(Math.random() * 110); // Genera un número aleatorio entre 0 y 109
        if (esPrimo(numeroGenerado)) {
            numerosPrimos.push(numeroGenerado);
        }
    }

    return numerosPrimos;
}

// Definir la cantidad de números primos que deseas generar
let cantidadNumerosPrimos = 10; // Cambia este valor según la cantidad de números primos que desees generar

// Generar N números primos y cargarlos en un array
let numerosPrimos = generarNumerosPrimos(cantidadNumerosPrimos);

// Imprimir los números primos generados
console.log("Números primos generados:");
console.log(numerosPrimos);
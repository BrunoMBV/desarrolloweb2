// Función para contar la cantidad de veces que aparece la letra "o" en una frase
function contarLetraO(frase) {
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'o') { // Comprueba si el carácter actual es "o" (ignorando mayúsculas y minúsculas)
            count++; // Incrementa el contador si se encuentra la letra "o"
        }
    }
    return count; 
}

// Función para obtener las vocales que aparecen en una frase
function obtenerVocales(frase) {
    let vocales = [];
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i].toLowerCase();
        if ('aeiou'.includes(char) && !vocales.includes(char)) { // Comprueba si el carácter actual es una vocal y no ha sido agregado anteriormente
            vocales.push(char); // Agrega la vocal al array de vocales
        }
    }
    return vocales; 
}

// Función para contar la cantidad de veces que aparece cada vocal en una frase
function contarVocales(frase) {
    let count = {};
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i].toLowerCase();
        if ('aeiou'.includes(char)) { // Comprueba si el carácter actual es una vocal
            if (count[char]) {
                count[char]++; // Incrementa el contador si la vocal ya existe en el objeto count
            } else {
                count[char] = 1; // Inicializa el contador en 1 si la vocal no existe en el objeto count
            }
        }
    }
    return count; 
}

// Función principal
function main() {
    let frase = prompt("Por favor, ingresa una frase:"); // Solicita al usuario que ingrese una frase
    let letraO = contarLetraO(frase); // Calcula la cantidad de veces que aparece la letra "o" en la frase
    let vocales = obtenerVocales(frase); // Obtiene las vocales que aparecen en la frase
    let conteoVocales = contarVocales(frase); // Calcula la cantidad de veces que aparece cada vocal en la frase

    // Imprime los resultados en la consola
    console.log("Cantidad de veces que aparece la letra 'o':", letraO);
    console.log("Vocales que aparecen en la frase:", vocales.join(', '));
    let conteoVocalesString = Object.keys(conteoVocales).map(vocal => vocal + ": " + conteoVocales[vocal]).join(', ');
    console.log("Cantidad de veces que aparece cada vocal:", conteoVocalesString);
}

main(); // Llama a la función principal para ejecutar el programa

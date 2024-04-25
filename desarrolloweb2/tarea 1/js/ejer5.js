// Array de nombres y apellidos
const nombres = ['juan', 'maría', 'pedro', 'luis', 'ana', 'carlos', 'laura', 'marta', 'josé', 'sofía', 'david', 'andrea', 'alejandro', 'claudia', 'manuel', 'patricia', 'pablo', 'elena', 'daniel', 'raquel'];
const apellidos = ['gómez', 'rodríguez', 'fernández', 'lópez', 'martínez', 'sánchez', 'pérez', 'gonzález', 'romero', 'garcía', 'torres', 'díaz', 'ruiz', 'vázquez', 'castro', 'navarro', 'morales', 'ramírez', 'jiménez', 'herrero'];
let nomape=[];


// Función para formatear un nombre, convirtiendo la primera letra en mayúscula y el resto en minúscula
const formatearNombre = nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

// Función para generar un nombre completo aleatorio
function generarNombre() {
    for (let i = 0; i < NELEMNTOS; i++) {
        let nomal = nombres[Math.floor(Math.random() * nombres.length)];
        let apeal = apellidos[Math.floor(Math.random() * apellidos.length)];
        nomape.push(`${formatearNombre(nomal)} ${formatearNombre(apeal)}`);
    }
    console.log("Nombres completos generados:");
}

// Función para imprimir los nombres completos generados
function imprimirNomApe() {
    nomape.forEach(persona => {
        console.log(persona);
    })
}

generarNombre();
imprimirNomApe();
// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Inicializar un array para almacenar los datos
let datos = [];

// Nombres disponibles
const nombresDisponibles = ["Bruno", "Carlos", "Daniel", "Elena", "Fernanda", "Gonzalo", "Héctor", "Isabela", "Juan", "Karla"];

// Generar 10 nombres aleatorios con notas iniciales en 0
for (let i = 0; i < 10; i++) {
    const nombre = nombresDisponibles.splice(generarNumeroAleatorio(0, nombresDisponibles.length - 1), 1)[0];
    datos.push({ Nombre: nombre, Nota: 0 });
}

// Mostrar los datos con notas iniciales en 0
console.log("Datos iniciales:");
console.log(datos);

// Modificar las notas aleatoriamente
datos.forEach(dato => {
    dato.Nota = generarNumeroAleatorio(20, 100);
});

// Mostrar los datos con las notas modificadas
console.log("\nDatos con notas modificadas:");
console.log(datos);

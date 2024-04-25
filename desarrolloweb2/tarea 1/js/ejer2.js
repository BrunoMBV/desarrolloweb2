// Solicitar al usuario que ingrese su nombre de usuario y contraseña
function solicitarUsuario() {
    return prompt("Por favor, ingresa tu nombre de usuario:");
}

// Función para solicitar al usuario una contraseña
function solicitarContraseña() {
    return prompt("Por favor, ingresa tu contraseña:");
}

// Función para validar las credenciales ingresadas
function validarCredenciales(usuario, contraseña) {
    const nombresPermitidos = ["juan", "pedro", "maria", "raul"];
    const contraseñaPermitida = "D153n0W3b2";
    
    if (nombresPermitidos.includes(usuario.toLowerCase()) && contraseña === contraseñaPermitida) {
        return true; // Credenciales válidas
    } else {
        return false; // Credenciales inválidas
    }
}

// Función principal
function iniciarSesion() {
    // Solicitar al usuario su nombre de usuario y contraseña
    var usuario = solicitarUsuario();
    var contraseña = solicitarContraseña();

    // Validar las credenciales ingresadas
    if (validarCredenciales(usuario, contraseña)) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario + "!");
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}

// Llamar a la función principal para iniciar sesión
iniciarSesion();
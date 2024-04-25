// Función para obtener el nombre del navegador
function obtenerNavegador() {
    // Verifica si es Internet Explorer
    if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > -1) {
        return "Internet Explorer";
    }
    // Verifica si es Microsoft Edge
    else if (navigator.userAgent.indexOf("Edge") !== -1 || navigator.userAgent.indexOf("Edg") !== -1) {
        return "Microsoft Edge";
    }
    // Verifica si es Opera
    else if (navigator.userAgent.indexOf("OPR") !== -1 || navigator.userAgent.indexOf("Opera") !== -1) {
        return "Opera";
    }
    // Verifica otros navegadores
    else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        return "Google Chrome";
    } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return "Mozilla Firefox";
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        return "Apple Safari";
    } else {
        return "Navegador desconocido";
    }
}

// Función para mostrar la bienvenida y el navegador
function mostrarBienvenidaYNavegador() {
    var navegador = obtenerNavegador();
    alert("¡Bienvenido! Estás usando el navegador: " + navegador);
}

// Llama a la función para mostrar la bienvenida y el navegador cuando se carga la página
mostrarBienvenidaYNavegador();
// Guardar datos
function guardarDatos(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

// Obtener datos
function obtenerDatos(clave) {
    return JSON.parse(localStorage.getItem(clave)) || [];
}

// Limpiar todo
function limpiarDatos() {
    localStorage.clear();
    location.reload();
}
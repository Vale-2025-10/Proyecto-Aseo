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

// =====================
// STORAGE SERVICE
// =====================

function saveData(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function clearAllData() {
    localStorage.clear();
}
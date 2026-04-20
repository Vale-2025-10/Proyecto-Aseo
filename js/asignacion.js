const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

// Mezclar lista (algoritmo Fisher-Yates)
function mezclarArray(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Generar asignación SIN repetir
function generarAsignacion() {
    let integrantes = obtenerDatos("integrantes");

    if (integrantes.length < 5) {
        alert("Debe haber al menos 5 integrantes");
        return;
    }

    let mezclados = mezclarArray(integrantes);

    let asignacion = {};

    diasSemana.forEach((dia, i) => {
        asignacion[dia] = mezclados[i];
    });

    guardarDatos("asignacion", asignacion);
    mostrarAsignacion();
}

// Reemplazo automático
function reemplazar(dia) {
    let integrantes = obtenerDatos("integrantes");
    let asignacion = obtenerDatos("asignacion");

    let disponibles = integrantes.filter(nombre => 
        !Object.values(asignacion).includes(nombre)
    );

    if (disponibles.length === 0) {
        disponibles = integrantes; // si todos ya están asignados
    }

    let nuevo = disponibles[Math.floor(Math.random() * disponibles.length)];

    asignacion[dia] = nuevo;

    guardarDatos("asignacion", asignacion);
    mostrarAsignacion();
}
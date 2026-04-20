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
// =====================
// ASSIGNMENT SERVICE
// =====================

const WEEK_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

// Mezclar lista (Fisher-Yates)
function shuffleList(list) {
    const array = [...list];

    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}

// Validar cantidad mínima
function hasMinimumMembers(members) {
    return members.length >= WEEK_DAYS.length;
}

// Crear asignación sin repetir
function createAssignment(members) {
    const shuffled = shuffleList(members);
    const assignment = {};

    WEEK_DAYS.forEach((day, index) => {
        assignment[day] = shuffled[index];
    });

    return assignment;
}

// Generar asignación
function generateAssignment() {
    const members = getData("members");

    if (!hasMinimumMembers(members)) {
        alert("Se necesitan al menos 5 integrantes");
        return;
    }

    const assignment = createAssignment(members);

    saveData("assignment", assignment);
    renderAssignment();
}

// Obtener disponibles para reemplazo
function getAvailableMembers(allMembers, currentAssignment) {
    return allMembers.filter(
        member => !Object.values(currentAssignment).includes(member)
    );
}

// Reemplazo automático por ausencia
function markAbsent(day) {
    const members = getData("members");
    let assignment = getData("assignment");

    const currentMember = assignment[day];

    // Filtrar disponibles (que no estén asignados)
    let available = members.filter(member => 
        !Object.values(assignment).includes(member)
    );

    // Evitar repetir el mismo
    available = available.filter(member => member !== currentMember);

    // Si no hay disponibles, usar toda la lista menos el actual
    if (available.length === 0) {
        available = members.filter(member => member !== currentMember);
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const replacement = available[randomIndex];

    assignment[day] = replacement;

    saveData("assignment", assignment);
    renderAssignment();
}
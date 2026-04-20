const integrantesBase = [
"Alisson Paola Jaramillo Echeverry",
"Carlos Andrés Zuluaga Atehortua",
"Daniela Zapata López",
"David Antonio Pescador Durán",
"David Buendia Ruiz",
"Eric Daniel Barreto Chavez",
"Jhoan Steven Murillo García",
"Jhon Alejandro Patiño Agudelo",
"Juan Camilo Valencia Rey",
"Juan Carlos Combita Sandoval",
"Juan David Ferrer Castillo",
"Juan José Santamaria Muñoz",
"Julián David Flórez Vera",
"Maria Fernanda Huertas Montes",
"Nelson Fabián Gallego Sánchez",
"Santiago Moreno Piedrahita",
"Santiago Palacio Tovar",
"Santiago Tovar Zambrano",
"Sebastian Ortega Barrero",
"Stiven Andrés Robles Galán",
"Valeria Arcila Hernández",
"Valeria Becerra Giraldo"
];

// Cargar integrantes
function cargarIntegrantes() {
    if (obtenerDatos("integrantes").length === 0) {
        guardarDatos("integrantes", integrantesBase);
    }

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    obtenerDatos("integrantes").forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Mostrar asignación
function mostrarAsignacion() {
    let contenedor = document.getElementById("dias");
    contenedor.innerHTML = "";

    let asignacion = obtenerDatos("asignacion");

    const clases = ["lunes","martes","miercoles","jueves","viernes"];

    Object.keys(asignacion).forEach((dia, i) => {
        let div = document.createElement("div");
        div.classList.add("dia", clases[i]);

        div.innerHTML = `
            <strong>${dia}</strong><br>
            ${asignacion[dia]}<br>
            <button onclick="reemplazar('${dia}')">Reemplazar</button>
        `;

        contenedor.appendChild(div);
    });
}

// Inicio
window.onload = () => {
    cargarIntegrantes();
    mostrarAsignacion();
}
// =====================
// APP CONTROLLER
// =====================

const BASE_MEMBERS = [
"Alisson Paola Jaramillo Echeverry",
"Carlos Andrés Zuluaga Atehortua",
"Daniela Zapata López",
"David Antonio Pescador Durán",
"David Buendia Ruiz",
"Eric Daniel Barreto Chavez",
"Jhoan Steven Murillo García",
"Jhon Alejandro Patiño Agudelo",
"Juan Camilo Valencia Rey",
"Juan Carlos Combita Sandoval",
"Juan David Ferrer Castillo",
"Juan José Santamaria Muñoz",
"Julián David Flórez Vera",
"Maria Fernanda Huertas Montes",
"Nelson Fabián Gallego Sánchez",
"Santiago Moreno Piedrahita",
"Santiago Palacio Tovar",
"Santiago Tovar Zambrano",
"Sebastian Ortega Barrero",
"Stiven Andrés Robles Galán",
"Valeria Arcila Hernández",
"Valeria Becerra Giraldo"
];

// Inicializar datos
function initializeMembers() {
    const storedMembers = getData("members");

    if (storedMembers.length === 0) {
        saveData("members", BASE_MEMBERS);
    }
}

// Renderizar lista
function renderMemberList() {
    const listElement = document.getElementById("lista");
    listElement.innerHTML = "";

    const members = getData("members");

    members.forEach(member => {
        const item = document.createElement("li");
        item.textContent = member;
        listElement.appendChild(item);
    });
}

// Crear tarjeta de día
function createDayCard(day, member, cssClass) {
    const card = document.createElement("div");
    card.classList.add("dia", cssClass);

    card.innerHTML = `
        <strong>${day}</strong><br>
        ${member}<br><br>

        <button onclick="markAbsent('${day}')">
            ❌ No asistió
        </button>
    `;

    return card;
}

// Renderizar asignación
function renderAssignment() {
    const container = document.getElementById("dias");
    container.innerHTML = "";

    const assignment = getData("assignment");

    const classes = ["lunes","martes","miercoles","jueves","viernes"];

    Object.keys(assignment).forEach((day, index) => {
        const card = createDayCard(day, assignment[day], classes[index]);
        container.appendChild(card);
    });
}

// Inicializar app
function initApp() {
    initializeMembers();
    renderMemberList();
    renderAssignment();

    console.log("App inicializada correctamente");
}

window.onload = initApp;
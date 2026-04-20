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
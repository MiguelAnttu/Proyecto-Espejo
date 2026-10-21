// 1. Estado de la aplicación (Datos iniciales que simulan venir de una base de datos)
let tareas = [
    { id: 1, titulo: 'Aprender la sintaxis de ES6', prioridad: 'Alta', completada: true },
    { id: 2, titulo: 'Dominar la asincronía y Fetch', prioridad: 'Media', completada: false },
    { id: 3, titulo: 'Migrar el proyecto a Angular', prioridad: 'Baja', completada: false }
];

// Estado del filtro activo actual ('Todas', 'Pendientes', 'Completadas')
let filtroActual = 'Todas';

// 2. Selectores del DOM principales
const formulario = document.querySelector('#form-tareas');
const inputTitulo = document.querySelector('#input-titulo');
const selectPrioridad = document.querySelector('#select-prioridad');
const listaContenedor = document.querySelector('#lista-tareas');
const loadingState = document.querySelector('#loading-state');
const botonesFiltro = document.querySelectorAll('.btn-filtro');

// 3. FUNCIÓN ASÍNCRONA (AJAX simulado): Debe ejecutarse al arrancar la web
async function inicializarApp() {
    // Simular una espera de 1.5 segundos
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });

    // Ocultar el indicador de carga
    loadingState.style.display = 'none';

    // Mostrar las tareas en pantalla
    pintarTareas();
}

// 4. FUNCIÓN DE RENDERIZADO: Encargada de pintar los nodos en el HTML
function pintarTareas() {
    listaContenedor.innerHTML = '';

    let tareasFiltradas = tareas.filter(tarea => {
        if (filtroActual === 'Pendientes') {
            return !tarea.completada;
        } else if (filtroActual === 'Completadas') {
            return tarea.completada;
        } else {
            return true;
        }
    });

    tareasFiltradas.forEach(tarea => {
        const li = document.createElement('li');

        li.classList.add(`prioridad-${tarea.prioridad.toLowerCase()}`);

        if (tarea.completada) {
            li.classList.add('completada');
        }

    });

    const titulo = document.createElement('span');
    titulo.textContent = tarea.titulo;

    const prioridad = document.createElement('span');
    prioridad.textContent = tarea.prioridad;

    const boton = document.createElement('button');
    boton.textContent = tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada';
    boton.addEventListener('click', () => {
        tareas = tareas.map(t => {
            if (t.id === tarea.id) {
                return { ...t, completada: !t.completada };
            }
            return t;
        });
        pintarTareas();
    });
    li.appendChild(titulo);
    li.appendChild(prioridad);
    li.appendChild(boton);

    listaContenedor.appendChild(li);

}

// 5. MANEJO DE EVENTOS: Captura de formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const titulo = inputTitulo.value.trim();
    const prioridad = selectPrioridad.value;
    // TODO: Capturar los valores de los inputs de forma segura
    // TODO: Crear un nuevo objeto tarea inmutable con un id único (Date.now())
    // TODO: Añadir el objeto al array global de tareas de forma inmutable (operador spread)
    // TODO: Volver a invocar pintarTareas() y resetear el formulario
});

// 6. MANEJO DE EVENTOS: Captura de botones de filtrado
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', (event) => {
        // Quitar clase active al botón anterior y ponérsela al pulsado
        document.querySelector('.btn-filtro.active').classList.remove('active');
        event.target.classList.add('active');

        // TODO: Actualizar la variable 'filtroActual' con el atributo 'data-filtro' del botón
        // TODO: Invocar pintarTareas() para refrescar la pantalla
    });
});

// Arrancar la aplicación
inicializarApp();
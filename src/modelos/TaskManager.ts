
import type { Tarea } from '../interfaces/tarea.interface.js';

export class TaskManager {

    private tareas: Tarea[] = [
        {
            id: 1,
            titulo: 'Aprender la sintaxis de ES6',
            prioridad: 'Alta',
            completada: true
        },
        {
            id: 2,
            titulo: 'Dominar la asincronía y Fetch',
            prioridad: 'Media',
            completada: false
        },
        {
            id: 3,
            titulo: 'Migrar el proyecto a Angular',
            prioridad: 'Baja',
            completada: false
        }
    ];

        private filtroActual: string = 'Todas';
        private formulario: HTMLFormElement;
        private inputTitulo: HTMLInputElement;
        private selectPrioridad: HTMLSelectElement;
         private listaContenedor: HTMLElement;
        private loadingState: HTMLElement;;

    constructor() {
        console.log('TaskManager iniciado');
        this.formulario = document.querySelector<HTMLFormElement>('#form-tareas')!;
        this.inputTitulo = document.querySelector<HTMLInputElement>('#input-titulo')!;
        this.selectPrioridad = document.querySelector<HTMLSelectElement>('#select-prioridad')!;
        this.listaContenedor = document.querySelector<HTMLElement>('#lista-tareas')!;
        this.loadingState = document.querySelector<HTMLElement>('#loading-state')!;

void this.inicializarApp();

    }
public pintarTareas(): void {

    this.listaContenedor.innerHTML = '';

    const tareasFiltradas = this.tareas.filter(tarea => {

        if (this.filtroActual === 'Pendientes') {
            return !tarea.completada;

        } else if (this.filtroActual === 'Completadas') {
            return tarea.completada;

        } else {
            return true;
        }
    });

    tareasFiltradas.forEach(tarea => {

        const li = document.createElement('li');

        li.classList.add(
            `prioridad-${tarea.prioridad.toLowerCase()}`
        );

        if (tarea.completada) {
            li.classList.add('completada');
        }

        const titulo = document.createElement('span');
        titulo.textContent = tarea.titulo;

        const prioridad = document.createElement('span');
        prioridad.textContent = tarea.prioridad;

        const boton = document.createElement('button');

        boton.textContent = tarea.completada
            ? 'Marcar como pendiente'
            : 'Marcar como completada';

        li.appendChild(titulo);
        li.appendChild(prioridad);
        li.appendChild(boton);

        this.listaContenedor.appendChild(li);
    });
}

private async inicializarApp(): Promise<void> {

    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });

    this.loadingState.style.display = 'none';

    this.pintarTareas();
}
}

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
    }
}

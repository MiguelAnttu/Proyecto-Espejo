
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

    constructor() {
        console.log('TaskManager iniciado');
    }
}

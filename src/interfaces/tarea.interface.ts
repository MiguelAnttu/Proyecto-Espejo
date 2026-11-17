export interface Tarea {
    id: number;
    titulo: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
}
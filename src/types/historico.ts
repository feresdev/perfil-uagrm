export interface HistoricoMain {
    registro:         string;
    nombre_apellidos: string;
    ppa:              string;
    carrera:          string;
    materias:         Materia[];
}

export interface Materia {
    nivel:   string;
    carrera: string;
    materia: string;
    cr:      string;
    periodo: string;
    nota:    string;
}
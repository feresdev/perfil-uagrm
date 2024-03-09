export interface AcademicoMain {
    registro:         string;
    nombre_apellidos: string;
    ppa:              string;
    carrera:          string;
    materias:         Materia[];
}

export interface Materia {
    nivel:   string;
    materia: string;
    periodo: string;
    nota:    string;
}
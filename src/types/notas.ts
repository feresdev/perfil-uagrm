export interface NotasMain {
    carrera:          string;
    registro:         string;
    nombre_apellidos: string;
    emision:          string;
    materias:         Materia[];
}

export interface Materia {
    plan:    string;
    nivel:   string;
    sigla:   string;
    grupo:   string;
    materia: string;
    periodo: string;
    nota:    string;
}

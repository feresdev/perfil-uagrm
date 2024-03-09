export interface BoletaMain {
    periodo:          string;
    registro:         string;
    nombre_apellidos: string;
    cedula:           string;
    carrera:          string;
    localidad:        string;
    modalidad:        string;
    materias:         Materia[];
}

export interface Materia {
    sigla:     string;
    grupo:     string;
    materia:   string;
    modalidad: string;
    nivel:     string;
    horario:   string[];
}

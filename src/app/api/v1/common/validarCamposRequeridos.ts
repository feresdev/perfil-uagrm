// Función para verificar la presencia de campos requeridos en el cuerpo de la solicitud
export function validarCamposRequeridos(body: Record<string, any>, camposRequeridos: string[]): boolean {
    return camposRequeridos.every((campo) => body[campo]);
}
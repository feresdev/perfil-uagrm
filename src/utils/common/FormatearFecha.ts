export default function formatFecha(fechaString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/La_Paz", // Establece la zona horaria de Bolivia
  };

  const fecha = new Date(fechaString);

  // Elimina el nombre de la zona horaria de la cadena de formato
  const formatoPersonalizado = { ...options, timeZoneName: undefined };

  return new Intl.DateTimeFormat("es-ES", formatoPersonalizado).format(fecha);
}

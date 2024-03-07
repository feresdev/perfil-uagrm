
import { NextResponse } from "next/server";

// Función para manejar errores
export function manejarError(status: number, mensaje: string, detalles?: string) {
  return NextResponse.json(
    {
      error: {
        código: status,
        mensaje,
        detalles,
      },
    },
    { status }
  );
}
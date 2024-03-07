import { NextRequest, NextResponse } from "next/server";

export function metodoNoPermitido(req: NextRequest) {
  return NextResponse.json(
    {
      error: {
        código: 405,
        mensaje: "Método no permitido",
        detalles: `El método ${req.method} no está permitido en esta ruta.`,
      },
    },
    { status: 405 }
  );
}

import { NextRequest, NextResponse } from "next/server";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";
import { manejarError } from "../../common/manejarError";

export const dynamic = "force-dynamic";

// Método POST: Se cierra session
export async function POST(req: NextRequest) {
  try {
    return NextResponse.json("Se cerro la sesión exitosamente", {
      status: 200,
      headers: {
        "Set-Cookie": `PHPSESSID=; path=/; SameSite=Lax`,
      },
    });
  } catch (error: any) {
    // Registrar el error en lugar de exponer detalles al cliente
    console.error("Error interno del servidor:", error.message);
    return manejarError(
      500,
      "Error interno del servidor",
      "Contacta al administrador"
    );
  }
}

// Método GET
export async function GET(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método PUT
export async function PUT(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método DELETE
export async function DELETE(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método PATCH
export async function PATCH(req: NextRequest) {
  return metodoNoPermitido(req);
}

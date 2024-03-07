import { NextRequest, NextResponse } from "next/server";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";
import { manejarError } from "../../common/manejarError";
import { validarCamposRequeridos } from "../../common/validarCamposRequeridos";

export const dynamic = "force-dynamic";

// Método POST: Se inicia sesion
export async function POST(req: NextRequest) {
  try {
    // Se extrae el body de la solicitud
    const body = await req.json();
    const { username, password } = body;

    // Verifica si se proporcionan campos de email y password en el cuerpo de la solicitud
    const camposRequeridos = ["username", "password"];
    if (!validarCamposRequeridos(body, camposRequeridos)) {
      return manejarError(
        400,
        "Solicitud incorrecta",
        "Verifique los campos de la solicitud realizada"
      );
    }

    const formData = new FormData();
    formData.append("username", `${username}`);
    formData.append("password", `${password}`);

    // Se realiza la solicitud POST
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(
      `https://perfil.uagrm.edu.bo/estudiantes/verif_est.php`,
      {
        method: "POST",
        body: formData,
      }
    );

    // Se verifica el response de la solicitud
    if (response.ok) {
      const cookies = await response.headers.get("Set-Cookie");
      return NextResponse.json("Sesion iniciada exitosamente", {
        status: 200,
        headers: {
          "Set-Cookie": `${cookies}; SameSite=Lax`,
        },
      });
    } else {
      const error = await response.text();

      // Divide la cadena en partes usando el espacio como separador
      const parts = error.split(" ");
      // Toma todas las partes después del primer espacio y las une nuevamente en una cadena
      const mensajeDespuesDelEspacio = parts.slice(1).join(" ");

      return manejarError(
        response.status,
        "Error al iniciar sesion",
        mensajeDespuesDelEspacio
      );
    }
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

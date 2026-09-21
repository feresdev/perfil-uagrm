import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";
import { manejarError } from "../../common/manejarError";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";

export const dynamic = "force-dynamic";

const limpiarTexto = (value: string) => value.replace(/\s+/g, " ").trim();

// Método GET: Obtener CI, nombre completo y registro por código
export async function GET(req: NextRequest) {
  try {
    const codigo = req.nextUrl.searchParams.get("codigo")?.trim();

    if (!codigo || !/^\d+$/.test(codigo)) {
      return manejarError(
        400,
        "Solicitud incorrecta",
        "El parámetro codigo es obligatorio y debe contener solamente números",
      );
    }

    const url = new URL("https://caja.uagrm.edu.bo/Home/Index_personal");
    url.searchParams.set("codigo", codigo);

    const response = await fetch(url, {
      headers: {
        Accept: "text/html",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return manejarError(
        502,
        "Error al consultar la caja UAGRM",
        `El servicio externo respondió con el estado ${response.status}`,
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const datosPersonales: Record<string, string> = {};
    $("#Listado_Pagos dl dt").each((_, element) => {
      const valor = $(element).next("dd").text();
      const clave = limpiarTexto($(element).text());

      if (clave) {
        datosPersonales[clave] = limpiarTexto(valor);
      }
    });

    if (Object.keys(datosPersonales).length === 0) {
      return manejarError(
        404,
        "No se encontraron datos",
        "No existe información para el código proporcionado",
      );
    }

    const ciCompleto = datosPersonales["Cédula de Identidad"] ?? "";
    const ci = ciCompleto.split(/\s+/)[0];

    return NextResponse.json({
      ci,
      nombre: datosPersonales.Nombre ?? "",
      registro: datosPersonales.Registro ?? "",
    });
  } catch (error: any) {
    console.error(
      "Error al hacer scrapping de datos personales:",
      error.message,
    );
    return manejarError(
      500,
      "Error interno en el servidor",
      "Contacte al administrador",
    );
  }
}

// Métodos no permitidos
export async function POST(req: NextRequest) {
  return metodoNoPermitido(req);
}

export async function PUT(req: NextRequest) {
  return metodoNoPermitido(req);
}

export async function DELETE(req: NextRequest) {
  return metodoNoPermitido(req);
}

export async function PATCH(req: NextRequest) {
  return metodoNoPermitido(req);
}

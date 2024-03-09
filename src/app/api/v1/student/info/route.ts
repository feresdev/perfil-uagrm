import * as cheerio from "cheerio";
import { manejarError } from "../../common/manejarError";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Método GET: Obtener los datos personales
export async function GET(req: NextRequest) {
  try {
    // Cookies
    const cookies = await req.headers.get("Cookie");
    const headers = new Headers();
    headers.append("Cookie", `${cookies}`);

    // Solicitud
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(
      "https://perfil.uagrm.edu.bo/estudiantes/show_page.php?opcion=1",
      { headers: headers }
    );

    const html = await response.text();
    if (html === ("not logged in" || "Error: La sesión ha finalizado")) {
      return manejarError(
        401,
        "Acceso no autorizado",
        "Se requiere iniciar sesion para la solicitud"
      );
    }

    const $ = cheerio.load(html);
    const pageTitle = $("div h4 span").text();
    const contentDiv = $("div.row");

    const dataStudent: { [key: string]: string } = {};

    // Itera sobre los divs hijos dentro del div padre
    contentDiv.children().each((index, childDiv) => {
      // Selecciona el título y el valor dentro de cada div hijo
      const title = $(childDiv).find("dt").text().trim();
      const value = $(childDiv).find("dd").text().trim();

      dataStudent[title] = value;
    });

    // Infomacion
    const data = {
      title: pageTitle,
      estudent: dataStudent,
    };

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error al hacer scrapping:", error.message);
    return manejarError(
      500,
      "Error interno en el servidor",
      "Contacte al administrador"
    );
  }
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

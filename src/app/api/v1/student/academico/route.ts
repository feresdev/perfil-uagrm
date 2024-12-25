import * as cheerio from "cheerio";
import { manejarError } from "../../common/manejarError";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface MateriasInterface {
  nivel: string;
  materia: string;
  periodo: string;
  nota: string;
}

// Método GET: Obtener el avance academico
export async function GET(req: NextRequest) {
  try {
    // Cookies
    const cookies = await req.headers.get("Cookie");
    const headers = new Headers();
    headers.append("Cookie", `${cookies}`);

    // Solicitud
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(
      "https://perfil.uagrm.edu.bo/estudiantes/show_page.php?opcion=3",
      { headers: headers }
    );

    const html = await response.text();
    if (html === "not logged in" || html === "Error: La sesión ha finalizado") {
      return manejarError(
        401,
        "Acceso no autorizado",
        "Se requiere iniciar sesion para la solicitud"
      );
    }

    const $ = cheerio.load(html);
    const registro = $("div.row div.col h2").text();
    const nombre_apellidos = $("div.row div.invoice-to div.address").text();
    const ppa = $("div.row div.invoice-details h1").text();
    const carrera = $("div.row div.invoice-details div").text();
    const contentTable = $("table tbody");

    const materias: MateriasInterface[] = [];

    contentTable.find("tr").each((index, row) => {
      const columns = $(row).find("td");

      const materiasData: MateriasInterface = {
        nivel: $(columns[0]).text().trim(),
        materia: $(columns[1]).text().trim(),
        periodo: $(columns[2]).text().trim(),
        nota: $(columns[3]).text().trim(),
      };

      materias.push(materiasData);
    });

    // Infomacion
    const data = {
      registro: registro,
      nombre_apellidos: nombre_apellidos,
      ppa: ppa,
      carrera: carrera,
      materias: materias,
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

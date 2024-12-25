import * as cheerio from "cheerio";
import { manejarError } from "../../common/manejarError";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface MateriasInterface {
  sigla: string;
  grupo: string;
  materia: string;
  modalidad: string;
  nivel: string;
  horario: string[];
}

// Método GET: Se obtiene la boleta de inscripcion
export async function GET(req: NextRequest) {
  try {
    // Cookies
    const cookies = await req.headers.get("Cookie");
    const headers = new Headers();
    headers.append("Cookie", `${cookies}`);

    // Solicitud
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(
      "https://perfil.uagrm.edu.bo/estudiantes/show_page.php?opcion=4",
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
    const periodo = $("header div.row div.col h1").text();
    const registro = $("div.company-details h2.name a").text().trim();
    const nombre_apellidos = $("div.col div small").first().text();
    const cedula = $("div.col div small:eq(1)").text();
    const carrera = $("div.row div.col h4").text();
    const localidad = $("div.row div.col div small:eq(3)").text();
    const modalidad = $("div.row div.col div small:eq(2)").text();
    const contentTable = $("table tbody");

    const materias: MateriasInterface[] = [];

    contentTable.find("tr").each((index, row) => {
      const columns = $(row).find("td");

      // Obteniendo la cadena del horario y dividiéndola en un array
      const horarioString = $(columns[5]).text().trim();
      const horarioArray = horarioString
        .split("|")
        .map((item) => item.replace(/0$/, "").trim()) // Elimina el 0 al final de cada cadena y espacios adicionales
        .filter((item) => item !== ""); // Elimina cadenas vacías

      const materiasData: MateriasInterface = {
        sigla: $(columns[0]).text().trim(),
        grupo: $(columns[1]).text().trim(),
        materia: $(columns[2]).text().trim(),
        modalidad: $(columns[3]).text().trim(),
        nivel: $(columns[4]).text().trim(),
        horario: horarioArray,
      };

      materias.push(materiasData);
    });

    // Infomacion
    const data = {
      periodo: periodo,
      registro: registro,
      nombre_apellidos: nombre_apellidos,
      cedula: cedula,
      carrera: carrera,
      localidad: localidad,
      modalidad: modalidad,
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

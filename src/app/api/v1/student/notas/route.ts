import * as cheerio from "cheerio";
import { manejarError } from "../../common/manejarError";
import { metodoNoPermitido } from "../../common/metodoNoPermitido";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface MateriasInterface {
  plan: string;
  nivel: string;
  sigla: string;
  grupo: string;
  materia: string;
  periodo: string;
  nota: string;
}

// Método POST: Obtener las notas por periodo
export async function POST(req: NextRequest) {
  try {
    // Se extrae el body de la solicitud
    const body = await req.json();
    const { sem, ano } = body;

    // Cookies
    const cookies = await req.headers.get("Cookie");
    const headers = new Headers();
    headers.append("Cookie", `${cookies}`);
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    // Convertir datos a formato x-www-form-urlencoded
    const datosFormateados = new URLSearchParams();
    datosFormateados.append("sem", sem);
    datosFormateados.append("ano", ano);

    // Solicitud
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(
      "https://perfil.uagrm.edu.bo/estudiantes/show_page.php?opcion=6",
      {
        method: "POST",
        body: datosFormateados,
        headers: headers,
      }
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
    const carrera = $("body table:eq(2) tbody tr td:eq(1)")
      .text()
      .replace(/[^\x20-\x7E]/g, "")
      .replace(/:/g, "");
    const registro = $("body table:eq(2) tbody tr td:eq(3)")
      .text()
      .replace(/:/g, "");
    const nombre_apellidos = $("body table:eq(2) tbody tr td:eq(5)")
      .text()
      .replace(/:/g, "");
    const emision = $("body table:eq(2) tbody tr td:eq(7)")
      .text()
      .trim()
      .replace(/^:/, "");
    const table = $('table[width="590"]').eq(1);

    const materias: MateriasInterface[] = [];

    // Iterar sobre las filas de la tabla
    table.find("tr").each((index, row) => {
      // Ignorar la primera fila que contiene los encabezados
      if (index === 0) return;

      // Obtener las celdas de la fila
      const columns = $(row).find("td");

      // Extraer información de cada celda
      const plan = columns.eq(0).text().trim();
      const nivel = columns.eq(1).text().trim();
      const [sigla, grupo] = $(columns[2]).text().trim().split("-");
      const materia = columns.eq(3).text().trim();
      const periodo = columns.eq(4).text().trim();
      const nota = columns.eq(5).text().trim();

      // Agregar la materia al array
      materias.push({
        plan,
        nivel,
        sigla: sigla.trim(),
        grupo: grupo.trim(),
        materia,
        periodo,
        nota,
      });
    });

    // Infomacion
    const data = {
      carrera: carrera.trim(),
      registro: registro.trim(),
      nombre_apellidos: nombre_apellidos.trim(),
      emision: new Date(emision).toISOString(),
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

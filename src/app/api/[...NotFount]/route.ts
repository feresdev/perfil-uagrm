import { NextRequest } from "next/server";
import { metodoNoPermitido } from "../../api/v1/common/metodoNoPermitido";

export const dynamic = "force-dynamic";

// Método GET
export async function GET(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método POST
export async function POST(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método PUT
export async function PUT(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método PATCH
export async function PATCH(req: NextRequest) {
  return metodoNoPermitido(req);
}

// Método DELETE
export async function DELETE(req: NextRequest) {
  return metodoNoPermitido(req);
}

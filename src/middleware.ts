import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  // Verificamos la existencia del Token
  const cookieStore = cookies();
  const session = cookieStore.get("PHPSESSID");
  const url = req.nextUrl.clone();

  // Se redirige si no hay token
  if (!session?.value) {
    const newUrl = `${url.origin}`;
    return NextResponse.redirect(newUrl);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/estudiantes/:path*"],
};

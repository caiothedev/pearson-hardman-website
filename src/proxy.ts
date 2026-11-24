import { NextResponse, type NextRequest } from "next/server"

/**
 * Redirecionamento otimista: só confere se o cookie existe. A assinatura e a
 * validade são verificadas em `src/_lib/data.ts`, perto dos dados.
 */
const SESSION_COOKIE = "ph_session"

export function proxy(request: NextRequest) {
    if (!request.cookies.has(SESSION_COOKIE)) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
}
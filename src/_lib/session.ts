import "server-only"
import { createHmac, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"

/**
 * Sessão em cookie assinado (HMAC-SHA256), sem banco e sem biblioteca.
 * O cookie guarda `userId.expiraEm.assinatura`; quem alterar o id ou a data
 * invalida a assinatura. É simples de propósito: o projeto é fictício.
 */

export const SESSION_COOKIE = "ph_session"
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000 // um expediente. Para o Harvey, meio.

// Defina SESSION_SECRET no .env.local para não usar o segredo de exemplo.
const SECRET = process.env.SESSION_SECRET ?? "pearson-hardman-segredo-de-demonstracao"

function sign(payload: string) {
    return createHmac("sha256", SECRET).update(payload).digest("base64url")
}

function verify(token: string): string | null {
    const [userId, expiresAt, signature] = token.split(".")
    if (!userId || !expiresAt || !signature) return null

    const expected = Buffer.from(sign(`${userId}.${expiresAt}`))
    const received = Buffer.from(signature)
    if (expected.length !== received.length || !timingSafeEqual(expected, received)) return null
    if (Number(expiresAt) < Date.now()) return null

    return userId
}

export async function createSession(userId: string) {
    const expiresAt = Date.now() + SESSION_DURATION_MS
    const payload = `${userId}.${expiresAt}`
    const cookieStore = await cookies()

    cookieStore.set(SESSION_COOKIE, `${payload}.${sign(payload)}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        expires: new Date(expiresAt),
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete(SESSION_COOKIE)
}

/** Retorna o id do usuário logado ou `null`. Lê o cookie, então só roda por requisição. */
export async function getSessionUserId(): Promise<string | null> {
    const token = (await cookies()).get(SESSION_COOKIE)?.value
    return token ? verify(token) : null
}
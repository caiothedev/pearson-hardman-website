import type { NextConfig } from "next"

const isDev = process.env.NODE_ENV === "development"

/**
 * Content Security Policy sem nonces: mantém todas as rotas estáticas (nonces
 * exigiriam renderização dinâmica em cada requisição). O site só carrega
 * recursos do próprio domínio, então qualquer origem externa fica bloqueada.
 * `'unsafe-inline'` em script-src é necessário para os scripts inline que o
 * Next injeta no HTML estático (payload do RSC).
 */
const contentSecurityPolicy = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "manifest-src 'self'",
    "worker-src 'self' blob:",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ")

const securityHeaders = [
    { key: "Content-Security-Policy", value: contentSecurityPolicy },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
    },
]

const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    poweredByHeader: false,
    async headers() {
        return [{ source: "/:path*", headers: securityHeaders }]
    },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
}

export default nextConfig

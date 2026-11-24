import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { SITE } from "@/_data/site"

/**
 * Gerador de Open Graph images da marca.
 *
 * Uso: crie `opengraph-image.tsx` (e `twitter-image.tsx`) no segmento da rota,
 * exporte `alt`, `size` e `contentType` e retorne `createOgImage({ ... })`.
 * As imagens são geradas no build e cacheadas (rotas estáticas). Em rotas
 * dinâmicas, use `params` para buscar o conteúdo, nunca texto vindo da query.
 */

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

const FONTS_DIR = join(process.cwd(), "src/fonts")

// As fontes não dependem da requisição: lidas uma única vez no escopo do módulo.
const [blairMedium, blairBold, nimbusRegular] = await Promise.all([
    readFile(join(FONTS_DIR, "ITC-Blair-Medium.otf")),
    readFile(join(FONTS_DIR, "ITC-Blair-Bold.otf")),
    readFile(join(FONTS_DIR, "NimbusSanL-Reg.otf")),
])

const COLORS = {
    background: "#000000",
    text: "#ffffff",
    muted: "#A3A3A3",
    line: "rgba(255, 255, 255, 0.16)",
}

export type OgImageContent = {
    /** Rótulo curto acima do título, ex.: "Áreas de atuação". */
    eyebrow?: string
    /** Título principal. Textos longos são truncados para caber no layout. */
    title: string
    /** Linha de apoio opcional no rodapé. */
    description?: string
}

/** Remove quebras e espaços extras e corta o texto no limite, com reticências. */
function clamp(text: string | undefined, max: number) {
    if (!text) return ""
    const clean = text.replace(/\s+/g, " ").trim()
    return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean
}

export function createOgImage({ eyebrow, title, description }: OgImageContent) {
    const safeTitle = clamp(title, 90).toUpperCase()
    const safeEyebrow = clamp(eyebrow, 40).toUpperCase()
    const safeDescription = clamp(description, 140)
    const titleSize = safeTitle.length > 50 ? 40 : 48

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    padding: 40,
                    background: COLORS.background,
                    color: COLORS.text,
                    fontFamily: "Nimbus Sans",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "56px 64px",
                        border: `2px solid ${COLORS.line}`,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <span style={{ fontFamily: "ITC Blair", fontWeight: 500, fontSize: 26, letterSpacing: "0.08em" }}>
                                PEARSON HARDMAN
                            </span>
                            <span
                                style={{
                                    fontFamily: "ITC Blair",
                                    fontWeight: 700,
                                    fontSize: 13,
                                    letterSpacing: "0.5em",
                                    color: COLORS.muted,
                                }}
                            >
                                ADVOGADOS
                            </span>
                        </div>
                        <span
                            style={{
                                fontFamily: "ITC Blair",
                                fontWeight: 700,
                                fontSize: 14,
                                letterSpacing: "0.2em",
                                color: COLORS.muted,
                            }}
                        >
                            MANHATTAN - NOVA YORK
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 1000 }}>
                        {safeEyebrow && (
                            <span
                                style={{
                                    fontFamily: "ITC Blair",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    letterSpacing: "0.2em",
                                    color: COLORS.muted,
                                }}
                            >
                                {safeEyebrow}
                            </span>
                        )}
                        <span
                            style={{
                                fontFamily: "ITC Blair",
                                fontWeight: 500,
                                fontSize: titleSize,
                                lineHeight: 1.12,
                                letterSpacing: "0.04em",
                            }}
                        >
                            {safeTitle}
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 48,
                            paddingTop: 28,
                            borderTop: `2px solid ${COLORS.line}`,
                            fontSize: 20,
                            color: COLORS.muted,
                        }}
                    >
                        <span style={{ maxWidth: 640, lineHeight: 1.4 }}>{safeDescription}</span>
                        <span style={{ fontFamily: "ITC Blair", fontWeight: 700, fontSize: 14, letterSpacing: "0.2em" }}>
                            {SITE.domain.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            ...OG_SIZE,
            fonts: [
                { name: "ITC Blair", data: blairMedium, weight: 500, style: "normal" },
                { name: "ITC Blair", data: blairBold, weight: 700, style: "normal" },
                { name: "Nimbus Sans", data: nimbusRegular, weight: 400, style: "normal" },
            ],
        },
    )
}
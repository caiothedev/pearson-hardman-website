"use client"

import { usePathname } from "next/navigation"

/**
 * Navegação e CTA do Header. Na intranet (`/dashboard`) ficam ocultos: quem
 * está lá dentro já navega pela sidebar e não precisa agendar reunião.
 */
export default function HeaderActions({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const hidden = pathname === "/dashboard" || pathname.startsWith("/dashboard/")

    return (
        <div className={`${hidden ? "hidden" : "flex"} w-full flex-row items-center justify-end lg:justify-between gap-3`}>
            {children}
        </div>
    )
}
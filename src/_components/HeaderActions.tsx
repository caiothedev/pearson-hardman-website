"use client"

import { usePathname } from "next/navigation"
import { logout } from "@/_lib/actions"

/**
 * Navegação e CTA do Header. Na intranet (`/dashboard`) dão lugar ao botão de
 * sair: quem está lá dentro já navega pela sidebar e não precisa agendar reunião.
 */
export default function HeaderActions({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isDashboard = pathname === "/dashboard" || pathname.startsWith("/dashboard/")

    if (isDashboard) {
        return (
            <form action={logout} className="ml-auto shrink-0">
                <button
                    type="submit"
                    className="cursor-pointer font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark transition-fast hover:text-white-text"
                >
                    Sair
                </button>
            </form>
        )
    }

    return (
        <div className="flex w-full flex-row items-center justify-end lg:justify-between gap-3">
            {children}
        </div>
    )
}
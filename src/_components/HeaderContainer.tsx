"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { container } from "@/_components/ui/styles"

const layout = "flex h-16 md:h-20 flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12"

function Logo({ href }: { href: string }) {
    return (
        <Link href={href} aria-label="Pearson Hardman, página inicial" className="flex flex-col leading-none">
            <span className="pearson-hardman-font whitespace-nowrap font-medium uppercase text-sm sm:text-base md:text-lg">
                Pearson Hardman
            </span>
        </Link>
    )
}

/**
 * Faixa interna do Header com o logo. No site institucional segue o `container`
 * (max-w-7xl) e o logo leva a `/`; na intranet (`/dashboard`) ocupa a largura
 * toda e o logo leva ao início do dashboard.
 */
export default function HeaderContainer({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isDashboard = pathname === "/dashboard" || pathname.startsWith("/dashboard/")
    const width = isDashboard ? "w-full mx-auto px-4 md:px-8" : container

    return (
        <div className={`${width} ${layout}`}>
            <Logo href={isDashboard ? "/dashboard" : "/"} />
            {children}
        </div>
    )
}

/** Versão estática (site institucional), usada enquanto o pathname não resolve. */
export function HeaderContainerFallback() {
    return (
        <div className={`${container} ${layout}`}>
            <Logo href="/" />
        </div>
    )
}
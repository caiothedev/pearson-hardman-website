"use client"

import { Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { logout } from "@/_lib/actions"

const LINKS = [
    { href: "/dashboard", label: "Painel" },
    { href: "/dashboard/clients", label: "Clientes" },
    { href: "/dashboard/contracts", label: "Contratos" },
] as const

function isActive(pathname: string | null, href: string) {
    if (pathname === null) return false
    return href === "/dashboard" ? pathname === href : pathname.startsWith(href)
}

export default function SidebarNav() {
    return (
        <Suspense fallback={<NavList pathname={null} />}>
            <ActiveNav />
        </Suspense>
    )
}

function ActiveNav() {
    return <NavList pathname={usePathname()} />
}

function NavList({ pathname }: { pathname: string | null }) {
    return (
        <nav aria-label="Navegação interna" className="border-t border-white-text/10 md:border-t-0">
            <ul className="flex flex-row overflow-x-auto md:flex-col md:px-3">
                {LINKS.map((link) => {
                    const active = isActive(pathname, link.href)
                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={`block whitespace-nowrap border-b-2 px-4 py-3 font-blair font-bold uppercase tracking-[0.2em] text-xs transition-fast md:border-b-0 md:border-l-2 md:px-3 ${
                                    active
                                        ? "border-white-text text-white-text"
                                        : "border-transparent text-gray-400-dark hover:text-white-text"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
                <li className="ml-auto md:hidden">
                    <form action={logout}>
                        <button
                            type="submit"
                            className="cursor-pointer whitespace-nowrap px-4 py-3 font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark hover:text-white-text"
                        >
                            Sair
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    )
}
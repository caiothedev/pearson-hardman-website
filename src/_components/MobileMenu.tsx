"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { NAV_LINKS } from "@/_data/site"

const MENU_ID = "menu-mobile"

export default function MobileMenu() {
    const [open, setOpen] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!open) return

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false)
                buttonRef.current?.focus()
            }
        }

        // Fecha o menu se a tela crescer até o breakpoint em que ele some.
        const desktop = window.matchMedia("(min-width: 1024px)")
        function onResize() {
            if (desktop.matches) setOpen(false)
        }

        document.addEventListener("keydown", onKeyDown)
        desktop.addEventListener("change", onResize)
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            desktop.removeEventListener("change", onResize)
            document.body.style.overflow = ""
        }
    }, [open])

    return (
        <div className="lg:hidden">
            <button
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls={MENU_ID}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((value) => !value)}
                className="relative flex size-11 cursor-pointer items-center justify-center bg-transparent text-white-text"
            >
                <span aria-hidden="true" className="relative block h-3 w-6">
                    <span
                        className={`absolute left-0 h-px w-6 bg-current transition-normal ${open ? "top-1.5 rotate-45" : "top-0"}`}
                    />
                    <span
                        className={`absolute left-0 h-px w-6 bg-current transition-normal ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                    />
                </span>
            </button>

            <nav
                id={MENU_ID}
                aria-label="Navegação principal"
                hidden={!open}
                className="fixed inset-x-0 top-16 bottom-0 bg-black-background border-t border-white-text/10"
            >
                <ul className="flex flex-col px-4 py-6">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href} className="border-b border-white-text/10">
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-5 font-blair font-medium uppercase tracking-[0.15em] text-xl text-white-text"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}